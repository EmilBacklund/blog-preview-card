import BlogPost from './pages/BlogPost';
import Layout from './components/Layout/Layout';
import { useState } from 'react';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout isHovered={isHovered}>
      <BlogPost isHovered={isHovered} setIsHovered={setIsHovered} />
    </Layout>
  );
}

export default App;
