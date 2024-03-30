import {Container} from "./styled";
import {theme} from "@/src/styles";
import {Package} from "@/src/interfaces";
import {Column, Row, Typography} from "..";

interface NPMPackageProps {
  package: Package;
}

export const NPMPackage: React.FC<NPMPackageProps> = ({
  package: npmPackage,
}) => {
  const {title, description, tags, github_url} = npmPackage;
  return (
    <Container onClick={() => window.open(github_url)}>
      <Column gap={10}>
        <Typography variant="title">{title}</Typography>
        <Typography>{description}</Typography>
        <Row gap={15}>
          {tags.map((tag, key) => (
            <Typography
              key={key}
              padding="5px 20px"
              borderRadius={100}
              backgroundColor={theme["secondary"]}
            >
              {tag}
            </Typography>
          ))}
        </Row>
      </Column>
    </Container>
  );
};
