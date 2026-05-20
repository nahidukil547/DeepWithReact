import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
const ProfileCard = () => {

  // User data
  const user = {
    name: "Alexandra Chen",
    role: "Senior Product Designer",
    location: "San Francisco, CA",
    bio: "Crafting meaningful digital experiences with a focus on human-centered design and accessibility.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format",
    stats: [
      { label: "Projects", value: "48+" },
      { label: "Years Exp", value: "7" },
      { label: "Clients", value: "32" }
    ]
  };

  // Inline styles object
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #252525 0%, #081c34 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    },
    card: {
      position: 'relative',
      maxWidth: '380px',
      width: '100%',
      backgroundColor: '#f1feff',
      borderRadius: '32px',
      boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      overflow: 'hidden'
    },
    headerGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '128px',
      background: 'linear-gradient(135deg, #eaaf66 0%, #cfd216 100%)',
      borderBottomLeftRadius: '24px',
      borderBottomRightRadius: '24px'
    },
    avatarContainer: {
      position: 'relative',
      paddingTop: '64px',
      paddingBottom: '16px',
      display: 'flex',
      justifyContent: 'center'
    },
    avatarWrapper: {
      position: 'relative'
    },
    avatarRing: {
      width: '128px',
      height: '128px',
      borderRadius: '50%',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      padding: '4px'
    },
    avatar: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover'
    },
    onlineIndicator: {
      position: 'absolute',
      bottom: '4px',
      right: '4px',
      width: '16px',
      height: '16px',
      backgroundColor: '#4ade80',
      borderRadius: '50%',
      border: '2px solid #ffffff',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    infoSection: {
      textAlign: 'center',
      paddingLeft: '24px',
      paddingRight: '24px'
    },
    name: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1a1a2e',
      margin: 0,
      letterSpacing: '-0.3px'
    },
    role: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#667eea',
      marginTop: '6px',
      marginBottom: 0
    },
    locationWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      marginTop: '10px',
      color: '#6b7280',
      fontSize: '13px'
    },
    buttonContainer: {
      padding: '20px 24px 24px 24px'
    },
    button: {
      width: '100%',
      padding: '12px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '14px',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
      transition: 'all 0.2s ease'
    }
  };

  // Hover effects using state
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.card,
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered
            ? '0 25px 40px -12px rgba(0, 0, 0, 0.2)'
            : '0 20px 35px -10px rgba(0, 0, 0, 0.1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Decorative Header */}
        <div style={styles.headerGradient} />

        {/* Avatar Section */}
        <div style={styles.avatarContainer}>
          <div style={styles.avatarWrapper}>
            <div style={styles.avatarRing}>
              <img src={user.avatar} alt={user.name} style={styles.avatar} />
            </div>
            <div style={styles.onlineIndicator} />
          </div>
        </div>

        {/* Name & Title */}
        <div style={styles.infoSection}>
          <h2 style={styles.name}>{user.name || user.name}</h2>
          <p style={styles.role}>{user.role}</p>

          {/* Location */}
            <div style={styles.locationWrapper}>
                <span>{`{email}`}</span>
            </div>
          <div style={styles.locationWrapper}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{user.location}</span>
          </div>
        </div>
        {/* CTA Button */}
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
            }}
            onMouseDown={(e) => {
              e.target.style.transform = 'translateY(1px)';
            }}
            onMouseUp={(e) => {
              e.target.style.transform = 'translateY(-2px)';
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;