import { Image } from 'expo-image';
import React from 'react';

import { Box, Text } from '@/theme';

type Status = {
  id: number;
  title: string;
  desc: string;
};

type Props = {
  statuses: Status[];
  currentStep: number;
};

export const DeliveryStatusIndicator = ({ statuses, currentStep }: Props) => {
  return (
    <Box gap="sm">
      <Box flexDirection="row" alignItems="center" gap="s">
        {statuses.map((status, index) => {
          return (
            <Box
              key={status.id}
              flex={1}
              height={4}
              borderRadius="m"
              style={{
                backgroundColor:
                  index + 1 <= currentStep ? '#36C07E' : '#DFDFDF',
              }}
            />
          );
        })}
      </Box>
      <Box borderWidth={1} borderColor="stroke" padding="m" borderRadius="m">
        {statuses.map((status, index) => {
          return (
            <Box key={status.id}>
              {index + 1 === currentStep && (
                <Box flexDirection="row" alignItems="center" gap="sm">
                  <Box
                    width={62}
                    height={62}
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      borderWidth: 1,
                      borderColor: '#DEDEDE',
                      borderRadius: 12,
                    }}>
                    <Image
                      style={{
                        width: 32,
                        height: 32,
                      }}
                      source={require('@/assets/icons/png/icon-bike.png')}
                      contentFit="cover"
                      transition={1000}
                    />
                  </Box>

                  <Box gap="xs" flex={1}>
                    <Text variant="semiBold" textTransform="capitalize">
                      {status.title}
                    </Text>
                    <Text color="muted" fontSize={12}>
                      {status.desc}
                    </Text>
                  </Box>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
