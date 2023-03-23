import React from 'react'
import { Html } from '@react-email/html'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'
import { Link } from '@react-email/link'
import { Img } from '@react-email/img'
import defaultTheme from 'tailwindcss/defaultTheme'

const base = {
  margin: 0,
  color: '#07222D',
  fontFamily: [...defaultTheme.fontFamily.sans],
  backgroundColor: '#fff',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
}

const container = {
  width: '100%',
  maxWidth: '640px',
  marginRight: 'auto',
  marginLeft: 'auto',
  padding: '32px',
}

const text = {
  base: {
    margin: '0 0 16px 0',
    color: '#667085',
    fontSize: '16px',
    lineHeight: '24px',
  },
  secondary: {
    margin: '0 0 16px 0',
    color: '#F9F8F3',
    fontSize: '16px',
    lineHeight: '24px',
  },
  heading: {
    margin: '0 0 16px 0',
    color: '#07222D',
    fontWeight: '700',
    fontSize: '30px',
    lineHeight: '38px',
    letterSpacing: '-0.025em',
  },
}

const li = {
  margin: '0 0 8px 0',
}

const link = {
  color: '#E0DCC8',
  textDecoration: 'underline',
}

export default function Email() {
  return (
    <Html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ready to get started?</title>
      </head>

      <body style={base}>
        <Section style={container}>
          <Img
            src="/static/logo.png"
            alt="Family Fortunate Logo"
            width="150"
            height="80"
            style={{ marginBottom: '16px' }}
          />
          <Text style={text.heading}>Ready to get started?</Text>

          <Text style={text.base}>Hello, name!</Text>

          <Text style={text.base}>
            You can approach telling your story in exactly your own unique way, so your year&apos;s
            membership provides plenty of options to do just that.
          </Text>

          <Text style={text.base}>
            Your very first question will arrive in your inbox shortly but whilst you&apos;re
            waiting you might want to have a look around your personal membership platform, so here
            are some tips for finding your way around the Family Fortunate website.
          </Text>
          <div
            style={{
              backgroundColor: '#07222D',
              padding: '24px',
              color: '#F9F8F3',
              marginBottom: '12px',
            }}
          >
            <ul>
              <li style={li}>
                Sign in{' '}
                <Link href="/sign-in" style={link}>
                  here
                </Link>
              </li>

              <li style={li}>
                <Link href="/frequently-asked-questions" style={link}>
                  Help
                </Link>{' '}
                - You have access to an extensive online help centre if you need assistance finding
                your way around your personal membership center.
              </li>
            </ul>

            <Text style={text.secondary}>
              You have access to more than 500 unique questions during your membership, but you have
              even more options than that.
            </Text>

            <ul>
              <li style={li}>
                <Link href="/member/questions" style={link}>
                  Select a different question
                </Link>
              </li>
              <li style={li}>
                <Link href="/member/questions" style={link}>
                  Write your own question
                </Link>
              </li>
              <li style={li}>
                <Link href="/member/questions" style={link}>
                  Change the wording of your question of the week
                </Link>
              </li>
              <li style={li}>
                <Link href="/member/stories" style={link}>
                  Edit your story
                </Link>{' '}
                - You can continue to make changes to your stories right throughout your membership
              </li>
            </ul>
          </div>
          <Text style={text.base}>
            I hope you enjoy the exciting journey you&apos;re about to start as you recapture your
            memories with the help of Family Fortunate.
          </Text>

          <Text style={text.base}>
            Best wishes, <br />
            <span style={{ fontWeight: 700 }}>Rachel</span> <br />
            Founder of Family Fortunate
          </Text>
          <Link href="#" style={link}>
            <div
              style={{
                minHeight: '249px',
                marginBottom: '16px',
                borderRadius: '16px',
                backgroundImage: 'url(/static/email-banner-1.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              }}
            />
          </Link>

          <Text style={text.base}>
            Stay updated by following us on our social media accounts to get more updates on our new
            releases and any ongoing promotions.
          </Text>

          <div
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '8px',
              marginBottom: '24px',
            }}
          >
            <a
              href="https://www.facebook.com/familyfortunate"
              target="_blank"
              rel="noreferrer"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/static/Facebook.png"
                alt="Facebook"
                style={{ height: '100%', width: '100%' }}
              />
            </a>

            <a
              href="https://www.instagram.com/familyfortunate"
              target="_blank"
              rel="noreferrer"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/static/Instagram.png"
                alt="Instagram"
                style={{ height: '100%', width: '100%' }}
              />
            </a>
          </div>

          <Text style={{ textAlign: 'center', ...text.base }}>
            <a target="_blank" href="/privacy-policy" style={text.base}>
              Privacy Policy
            </a>{' '}
            <br />
            61-63 Parry St Newcastle, NSW Australia <br />
            &copy; 2023. Family Fortunate
          </Text>
        </Section>
      </body>
    </Html>
  )
}
