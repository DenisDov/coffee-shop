import React, { useState } from 'react';

import { Text } from '@/theme';

type Props = {
  text: string;
  maxLength: number;
};

export const ReadMore = ({ text, maxLength }: Props) => {
  const [showAllText, setShowAllText] = useState(false);

  const toggleText = () => {
    setShowAllText(!showAllText);
  };

  return (
    <Text lineHeight={22.96}>
      <Text fontSize={14} color="muted">
        {showAllText || text.length <= maxLength
          ? text
          : text.slice(0, maxLength) + '...'}
      </Text>
      {text.length > maxLength && (
        <Text variant="semiBold" color="primary" onPress={toggleText}>
          {showAllText ? ' Show less' : ' Read more'}
        </Text>
      )}
    </Text>
  );
};
