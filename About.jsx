import React from 'react';

const About = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    content: {
      textAlign: 'center',
      color: '#ffffff',
      maxWidth: '900px',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    },
    subtitle: {
      fontSize: '1.8rem',
      fontWeight: '400',
      marginBottom: '2rem',
      opacity: 0.95,
    },
    description: {
      fontSize: '1.2rem',
      lineHeight: '1.8',
      marginBottom: '1.5rem',
      opacity: 0.9,
    },
    section: {
      marginTop: '2rem',
      padding: '1.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      backdropFilter: 'blur(10px)',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      textAlign: 'left',
      maxWidth: '600px',
      margin: '0 auto',
    },
    listItem: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      marginBottom: '0.8rem',
      paddingLeft: '1.5rem',
      position: 'relative',
    },
    listItemBefore: {
      content: '"▸"',
      position: 'absolute',
      left: 0,
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>Learn More About Our Mission</p>
        <p style={styles.description}>
          We are passionate about building modern, user-friendly applications
          that make a difference. Our team is dedicated to creating exceptional
          digital experiences through innovative design and cutting-edge technology.
        </p>
        
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>What We Do</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.listItemBefore}></span>
              Build beautiful and responsive web applications
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemBefore}></span>
              Create intuitive user interfaces with modern design principles
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemBefore}></span>
              Develop scalable solutions using the latest technologies
            </li>
            <li style={styles.listItem}>
              <span style={styles.listItemBefore}></span>
              Focus on user experience and performance optimization
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

