import {Fragment, useState} from "react";
import {ChevronDown, ChevronUp} from "react-feather";
import {Backdrop, Column, Row, Typography} from "..";
import {Container, Field, DropdownStyled, DropdownItem} from "./styled";

export type DropdownOption = {
  label: string;
  icon: JSX.Element;
  value: string | number;
};

interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  onSelect: (option: DropdownOption) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onSelect,
}) => {
  const [value, setValue] = useState<DropdownOption>(options[0]);
  const [displayDropdown, setDisplayDropdown] = useState<boolean>(false);
  const ChevronIcon = displayDropdown ? ChevronUp : ChevronDown;

  return (
    <Container>
      <Column gap={5}>
        {label && <Typography fontWeight="300">{label}</Typography>}
        <Field onClick={() => setDisplayDropdown((open) => !open)}>
          <Row gap={10}>
            {value["icon"]}
            <Typography>{value["label"]}</Typography>
          </Row>
          <ChevronIcon color="#fff" />
        </Field>
        {displayDropdown && (
          <Fragment>
            <DropdownStyled>
              {options.map(({icon, label}, key) => (
                <DropdownItem
                  key={key}
                  onClick={() => {
                    setValue(options[key]);
                    onSelect(options[key]);
                    setDisplayDropdown(false);
                  }}
                >
                  <Row gap={15}>
                    {icon}
                    <Typography>{label}</Typography>
                  </Row>
                </DropdownItem>
              ))}
            </DropdownStyled>
            <Backdrop onClick={() => setDisplayDropdown(false)} />
          </Fragment>
        )}
      </Column>
    </Container>
  );
};
