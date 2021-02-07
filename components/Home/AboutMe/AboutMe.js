import { css } from '@emotion/react';
import PictureOfMyself from 'components/Home/AboutMe/PictureOfMyself';
import Container from 'components/shared/Container/Container';
import Heading from 'components/shared/Heading/Heading';
import Link from 'components/shared/Link/Link';
import Period from 'components/shared/Period/Period';
import SectionWaveIcon from 'components/shared/SectionWaveIcon/SectionWaveIcon';
import Text from 'components/shared/Text/Text';
import { colors } from 'styles/utils';

const aboutMeCss = css`
  padding-top: 20vh;
  padding-bottom: 20vh;
`;

const sectionTitleCss = css`
  margin-bottom: 5vw;
`;

const innerTextCss = css`
  max-width: 300px;
`;

const paragraphCss = css`
  margin-top: 50px;
`;

const learnMoreCss = css`
  margin-top: 1em;
`;

const containerCss = css`
  position: relative;
  display: flex;
`;

const textColCss = css`
  flex: 1;
`;

const pictureCss = css`
  position: absolute;
  right: 0;
  top: 0;
`;

export default function AboutMe() {
  return (
    <section css={aboutMeCss}>
      <Container css={containerCss}>
        <div css={textColCss}>
          <SectionWaveIcon color={colors.red} />

          <Heading
            css={sectionTitleCss}
            color={colors.red}
            variant="h1"
            upperCase
          >
            Ab
            <br />
            out.
          </Heading>

          {/* Inner */}
          <div css={innerTextCss}>
            <Heading variant="h3">
              Highly{' '}
              <Text as="span" fontType="serif" size="lg">
                motivated
              </Text>{' '}
              with great work ethic
              <Period color={colors.red} />
            </Heading>

            <Text css={paragraphCss} color={colors.gray} size="xs">
              Responsible, with quick perception and systemic vision. Able to
              work in a team and cope with difficulties and a tight schedule.
              Very organized and able to adapt to any work environment. With the
              love for coding, I'm interested in developing and enriching user
              experience while using new and challenging technologies.
            </Text>

            <Link css={learnMoreCss} href="/about">
              <Text fontType="serif">Learn more about me</Text>
            </Link>
          </div>
        </div>
        <div css={pictureCss}>
          <PictureOfMyself />
        </div>
      </Container>
    </section>
  );
}
