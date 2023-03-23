import React from 'react'
import { Html } from '@react-email/html'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'
import { Img } from '@react-email/img'
import { Button } from '@react-email/button'

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

const button = {
  padding: '20px 30px',
  backgroundColor: '#9A825C',
  color: '#F9F8F8',
  fontWeight: 'bold',
  cursor: 'pointer',
  borderRadius: '5px',
  marginLeft: 'auto',
  marginRight: 'auto',
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

          <Text style={text.base}>Hello, [NAME]!</Text>

          <Text style={text.base}>
            We received a request to reset the password for the Family Fortunate account associated
            with [EMAIL]
          </Text>
          <div style={{ width: '100%', marginBottom: '12px', textAlign: 'center' }}>
            <Button href="#" style={button}>
              Reset password
            </Button>
          </div>

          <Text style={text.base}>
            If you didn&apos;t request to reset your password, contact us via our support site. No
            changes were made to your account yet.
          </Text>

          <Text style={text.base}>
            Best wishes, <br />
            <span style={{ fontWeight: 700 }}>Rachel</span> <br />
            Founder of Family Fortunate
          </Text>

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
