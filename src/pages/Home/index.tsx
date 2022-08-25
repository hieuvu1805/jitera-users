import { useEffect, useState } from 'react';
import { Row, Col, Typography, Spin } from 'antd';

import { IUser } from '../../interfaces/User';
import Layout from '../../components/Layout';
import UserCard from '../../components/UserCard';

import './home.css';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <Typography.Title>Home</Typography.Title>
      {loading ? (
        <div className="LoadingContainer">
          <Spin tip="Loading..." />
        </div>
      ) : users.length ? (
        <Row gutter={[32, 32]}>
          {users.map((user) => (
            <Col xs={24} sm={12} md={8} lg={6}>
              <UserCard {...user} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="Empty">No users found</div>
      )}
    </Layout>
  );
}

export default App;
