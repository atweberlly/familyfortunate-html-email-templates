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

          <Text style={text.base}>Hello, name,</Text>

          <Text style={text.heading}>Happy Birthday!</Text>

          <Text style={text.base}>
            We&apos;ve bought you an annual membership with Family Fortunate because we&apos;d love
            to hear about your life before we came along!
          </Text>

          <Text style={text.base}>
            Family Fortunate is an online service which helps you gather your memories & the stories
            of your life into a book so you can share them with us. Each week they&apos;ll send you
            an email with a question & all you have to do is answer it.
          </Text>

          <Text style={text.base}>
            When you write a story or a memory, which can be as long or short as you want, it will
            be stored in your online account so you can go back to re-read or edit it any time
            you&apos;d like to.
          </Text>

          <Text style={text.base}>Your very first question will arrive in your inbox shortly.</Text>

          <Text style={text.base}>
            <span style={{ fontWeight: 700 }}>Emma, Jason & Jodie</span>
          </Text>

          <div
            style={{
              backgroundColor: '#07222D',
              padding: '24px',
              color: '#F9F8F3',
              marginBottom: '12px',
              fontStyle: 'italic',
            }}
          >
            <Text style={text.secondary}>[Name], welcome to Family Fortunate!</Text>

            <Text style={text.secondary}>
              You can approach telling your story in exactly your own unique way, so your
              year&apos;s membership provides plenty of options to do just that.
            </Text>

            <Text style={text.secondary}>
              Within your Family Fortunate membership, you have access to more than 500 unique
              questions which will help you relive the stories of your life and preserve them to
              share with the people who bought your gift for you!
            </Text>

            <Text style={text.secondary}>
              Have a look at our website here{' '}
              <Link href="/" style={link}>
                www.familyfortunate.us
              </Link>
            </Text>

            <Text style={text.secondary}>
              And when you’re ready to start, you can{' '}
              <Link href="/" style={link}>
                setup your password{' '}
              </Link>{' '}
              and sign-in to your personal account here.
            </Text>
            <Text style={text.secondary}>
              I hope you enjoy the exciting journey you&apos;re about to start as you recapture your
              memories with the help of Family Fortunate.
            </Text>

            <Text style={text.secondary}>
              Best wishes, <br />
              <span style={{ fontWeight: 700 }}>Rachel</span> <br />
              Founder of Family Fortunate
            </Text>
          </div>

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
