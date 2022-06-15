import { Box, Heading, Text } from "@chakra-ui/react";

type SectionHeadingProps = {
  slogan?: string;
  title?: string;
  emoji?: string;
  description?: string;
}

const SectionHeading
  = ({ slogan, title, emoji, description, ...props }: SectionHeadingProps) => {
    return (
      <Box textAlign='center' mb='50px'>
        <Box  {...props}>
          {slogan && (<Box
            color='blue'
            fontWeight='600'
            fontSize='1rem'
            lineHeight='2.5'
          >
            {slogan}</Box>)}

          <Heading
            color='textTitle'
            fontWeight='600'
            fontSize='1.75rem'
            lineHeight='1.5'
          >
            {emoji ? <Text as='span'>{title}</Text> : title}
            {emoji && <img src={emoji} alt="emoji" />}
          </Heading>

          {description && (<Text as='p'>{description}</Text>)}
        </Box>
      </Box>
    );
  }

export default SectionHeading;