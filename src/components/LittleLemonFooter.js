
export default function LittleLemonFooter() {
  return (
    <div style={styles.container}>
      <p style={styles.footerText}>
        All rights reserved by Little Lemon, 2022{' '}
      </p>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#495E57',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontStyle: 'italic',
  },
};
