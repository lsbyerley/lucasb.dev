import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';
import { useAppContext } from '@/AppContext';

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  const { name } = useAppContext();
  const pageTitle = `Uses - ${name}.dev`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Software and gadgets I use during my day to day"
        />
      </Head>
      <SimpleLayout
        title="Software and gadgets I use during my day to day"
        intro="Here’s a small list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, 64GB RAM (2021)">
              The M1 Max chip is solid. Handles everything I need to do from a development standpoint very well. No more loud spinning fans!
            </Tool>
            <Tool title="Samsung 32” Class UR59 Series 4K UHD Curved Monitor">
              Picked this up at costco when it was discounted and I really like
              it.
            </Tool>
            <Tool title="Apple Magic Mouse and Keyboard">
              The standard magic mouse/keyboard 2 options from Apple.
            </Tool>
            <Tool title="Autonomous ErgoChair Core">
              Pretty solid chair at a decent price. May upgrade to Herman Miller
              one day
            </Tool>
            <Tool title="Autonomous SmartDesk Core">
              Really like the ability to stand when I want to. Nicely priced
              standing desk option
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              Love all the extensions available in VS Code. It's my go to editor
              these days
            </Tool>
          </ToolsSection>
          <ToolsSection title="Collaboration">
            <Tool title="Slack">
              collaboration and communication between co-workers is vital and
              Slack is our go to.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
