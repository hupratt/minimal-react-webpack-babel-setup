const Button = ({ onPress, children, disabled }) => {
  return (
    <button
      aria-label="On Click"
      onClick={onPress}
      style={[styles.buttonWrapper, disabled && styles.disabled]}
      disabled={disabled}
    >
      <p style={styles.text}>{children}</p>
    </button>
  );
};

const styles = {
  buttonWrapper: {
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
};

export default Button;
