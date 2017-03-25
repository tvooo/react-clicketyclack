import React, { PropTypes } from 'react';
import { Container } from 'react-responsive-grid';

const Block = ({
  alt,
  padding,
  children,
}) => {
  const cx = {};
  if (alt) { cx.backgroundColor = '#f8f8f8'; }

  return (
    <div style={cx}>
      <Container
        style={{
          maxWidth: 1200,
          padding: '2rem',
          paddingTop: padding,
          paddingBottom: padding,
        }}
      >
        { children }
      </Container>
    </div>
  );
};

Block.propTypes = {
  children: PropTypes.node.isRequired,
  alt: PropTypes.bool,
  padding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
};

Block.defaultProps = {
  alt: false,
  padding: '4rem',
};

export default Block;
