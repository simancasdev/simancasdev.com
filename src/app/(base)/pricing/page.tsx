"use client";
import {theme} from "@/src/styles";
import {Column, Row, Typography} from "@/src/components";

export default function Pricing() {
  return (
    <Column gap={30}>
      <Row backgroundColor={theme["secondary"]} padding={20} borderRadius={5}>
        <Typography fontSize={18}>
          ✅ Okay, let me clarify something first. In all my years working as a
          software developer I have learned that usually clients have some
          priorities for their projects; so with that in mind, you can decide on
          what you want to focus my development hours. I usually work 8hr per
          day, so we (you and I) can make those hours really worth it
        </Typography>
      </Row>
      <Column>
        <Typography variant="title">What is my hour rate?</Typography>
        <Row alignItems="flex-end">
          <Typography fontSize={30}>$15</Typography>
          <Typography>/hr</Typography>
        </Row>
      </Column>
    </Column>
  );
}
