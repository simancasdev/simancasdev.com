import {Avatar, Column, Typography} from "@/src/components";

export default function About() {
  return (
    <Column gap={20}>
      <Column gap={15}>
        <Avatar
          size={120}
          src="https://media.licdn.com/dms/image/D4E03AQGdyUa1Tq2wKw/profile-displayphoto-shrink_800_800/0/1682531225507?e=1717632000&v=beta&t=1PkGHiDwxrGTxM0H7pGJVlwwJrkeiAzWMr4pGw6JLUE"
        />
        <Column>
          <Typography variant="title">Héctor Simancas</Typography>
          <Typography fontWeight={200}>
            Software developer | React & React Native
          </Typography>
        </Column>
      </Column>
      <Column>
        <Typography>
          Software Developer. I have been working mainly in front-end
          development for web and mobile applications. I like to always study
          and expand my knowledge to improve my practices always looking for
          code that have good practices like SOLID and DRY principles. Also, I
          always try to keep in mind data structures and algorithms that can
          allow the best performance in each feature.
        </Typography>
      </Column>
    </Column>
  );
}
