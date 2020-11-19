import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import YellowButtons from './yellow';
import BlueButtons from './blue';
import TertiaryBlackButtons from './tertiaryBlack';
import TertiaryBlueButtons from './tertiaryBlue';
import TextButtons from './textButtons';
import TextLinks from './textLinks';
import SelectToggle from './selectToggle';
import RadioButtons from './radioButtons';
import Checkbox from './checkbox';

import Description from '../Description';
import DottedDescription from '../DottedDescription';

const buttonLabel = 'Button Label';
const placeholder = 'Placeholder';

const Button = () => {
  return (
    <Fragment>
      <PageHeader title="Buttons" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <p>{"Buttons indicate actions on the page. Each of our button types have specific purposes that are used consistently. Individual button types are documented below, but the following guidelines will help you understand basic functionality for all of our buttons."}</p>
      <DottedDescription
        title="Best practices"
        text={`Buttons should:`}
        dottedLines={[
          "Be clearly and accurately labeled.",
          "Lead with strong, actionable verbs.",
          "Use established button colors appropriately.",
          "Prioritize the most important actions. Too many calls to action can cause confusion and make merchants unsure of what to do next.",
          "Be positioned in consistent locations in the interface."
        ]}
      />
      <Description
        title={"Interactions"}
        text={`The buttons have an arrow on hover. It animates from left to right on the left side of the button`}
      />
      <DottedDescription
        title="Primary buttons"
        text={`Primary buttons should be used for primary calls to action`}
        dottedLines={["Only one primary button should be contained in each card or screen view",
          "Should never be used for destructive actions",
          "Should never be used as a cancel button"]}
      />
      <YellowButtons title="Yellow" label={buttonLabel} />
      <div className="vf-mt-lg" />
      <BlueButtons title="Blue" label={buttonLabel} />
      <div className="vf-mt-xl" />
      <DottedDescription
        title="Secondary Buttons"
        text={
            <React.Fragment>
                Outlined buttons (often called “ghost” buttons) are a step up in complexity and emphasis from a text button in button design. They typically indicate actions that are important but not the primary action on a page. Outlined buttons should be exactly that: an outline with no fill surrounding text that indicates an action.
                <br/>
                <br/>
                Secondary buttons should be used for actions, which stands for a secondary tasks
            </React.Fragment>
        }
        dottedLines={["Should be used for irreversible actions",
            "Should never be used as a primairy button"]}
      />
      <TertiaryBlackButtons title="Tertiary Black (outlined button)" label={buttonLabel} />
      <TertiaryBlueButtons title="Tertiary Blue (outlined button)" label={buttonLabel} />
      <div className="vf-mt-xl" />
      <Description
        title="Text Buttons and Links"
        text={`Text buttons are text labels that fall outside of a block of text. The text should describe the action that will occur if a user clicks or taps a button. Text buttons have a low level of emphasis and are typically used for less important actions. Because text buttons don’t have a container, they don’t distract from nearby content. When you want to use a tertiairy button as a return button, point the arrow to the left.`}
      />
      <TextButtons label={buttonLabel} />
      <div className="vf-mt-xl" />
      <Description title="Text Links" leftText={`For usage in bodytext when links are needed`} rightText={``} />
      <TextLinks label={placeholder} />
      <div className="vf-mt-xl" />
      <Description
        title="Toggle"
        text="Mostly used to indicate engaging / disengaging certain feature within the context."
      />
      <SelectToggle label={placeholder} />
      <div className="vf-mt-xl" />
      <Description
        title="Radio button"
        text="Used in the situation when desired state of preference needs to be selected. Only one selection can be made at all times. When mutiple preferences need to be chosen use checkboxes instead."
      />
      <RadioButtons label={placeholder} />
      <div className="vf-mt-xl" />
      <Description
        title="Checkbox"
        text="Checkboxes can be used when a desired items needs to be selected. Depending on the context it can be one or multiple items."
      />
      <Checkbox label={placeholder} />
    </Fragment>
  );
};

export default Button;