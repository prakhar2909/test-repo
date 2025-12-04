import React from 'react';

const Home = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    content: {
      textAlign: 'center',
      color: '#ffffff',
      maxWidth: '800px',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    },
    subtitle: {
      fontSize: '1.5rem',
      fontWeight: '300',
      marginBottom: '2rem',
      opacity: 0.95,
    },
    description: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '2rem',
      opacity: 0.9,
    },
    button: {
      padding: '1rem 2rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#667eea',
      backgroundColor: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
  };

  const handleButtonHover = (e) => {
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome Home</h1>
        <p style={styles.subtitle}>Your React Application</p>
        <p style={styles.description}>
          This is a beautiful, modern home page component built with React.
          Customize it to fit your needs and start building something amazing!
        </p>
        <button
          style={styles.button}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

