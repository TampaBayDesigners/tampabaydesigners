import styled from 'styled-components'
import React from 'react'
import siteConfig from '../../siteconfig.json'
import Link from 'next/link'

const LogoContainer = styled.a`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[3]};
  text-align: center;
  color: var(--white);
  transition: all 120ms ease-out 0s;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[4]}) {
    flex-direction: row;
    align-items: center;
  }
  &:hover, &:focus {
    color: var(--white);
    text-shadow: 0px 4px 20px rgba(255,255,255,.2);
  }
`

const LogoIcon = styled.div`
  width: ${({ theme }) => theme.space[8]};
  height: ${({ theme }) => theme.space[8]};
  background: var(--orange);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[1]};
  box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,.2);
  position: relative;
  &:after {
    content: '';
    border-radius: ${({ theme }) => theme.space[4]};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(-45deg, rgba(255,255,255,0), rgba(255,255,255,0.5));
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[4]}) {
    width: ${({ theme }) => theme.space[6]};
    height: ${({ theme }) => theme.space[6]};
    border-radius: calc(${({ theme }) => theme.space[2]} + ${({ theme }) => theme.space[1]});
    &:after {
      border-radius: calc(${({ theme }) => theme.space[2]} + ${({ theme }) => theme.space[1]});
    }
  }
`

const LogoTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[7]};
  margin-top: ${({ theme }) => theme.space[4]};
  margin-bottom: 0;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[4]}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    margin-top: 0;
    padding-left: ${({ theme }) => theme.space[3]}
  }
`

export default function Logo() {
  return(
    <Link href="/">
      <LogoContainer>
        <LogoIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="none" viewBox="0 0 80 80">
            <g fill="var(--white)" clipPath="url(#clip0)">
              <path fillOpacity="1" fillRule="evenodd" d="M20.796 52.265L18.65 61.35l9.085-2.146 33.48-33.48-6.94-6.938-33.479 33.48zm8.411 10.7a2 2 0 00.955-.531l35.295-35.296a2 2 0 000-2.828l-9.767-9.767a2 2 0 00-2.828 0L17.566 49.838a2 2 0 00-.532.955L14.012 63.58a2 2 0 002.407 2.407l12.788-3.022z" clipRule="evenodd"/>
              <path fillOpacity="1" d="M29.521 59.45a1 1 0 01-1.414 0l-3.071-3.072a1 1 0 010-1.414l32.65-32.65a1 1 0 011.414 0l3.072 3.072a1 1 0 010 1.414l-32.65 32.65zM21.296 63.936a1 1 0 01-1.415 0l-3.071-3.072a1 1 0 010-1.414l.508-.508a1 1 0 011.414 0l3.072 3.072a1 1 0 010 1.414l-.508.508zM37.03 24.434L26.94 14.345a2 2 0 00-2.828 0l-9.767 9.767a2 2 0 000 2.829l10.09 10.088 2.828-2.828-8.675-8.675 6.938-6.938 1.185 1.184-3.47 3.47 1.415 1.414 3.469-3.47 2.599 2.6-3.47 3.468 1.415 1.415 3.469-3.47 2.063 2.063 2.828-2.828zM45.785 52.724l8.689 8.688 6.938-6.938-1.184-1.185-3.47 3.47-1.414-1.415 3.47-3.47-2.6-2.598-3.468 3.47-1.415-1.415 3.47-3.469-2.077-2.077 2.828-2.828 10.103 10.102a2 2 0 010 2.829l-9.767 9.767a2 2 0 01-2.829 0L42.957 55.552l2.828-2.828z"/>
            </g>
          </svg>
        </LogoIcon>
        <LogoTitle>{siteConfig.title}</LogoTitle>
      </LogoContainer>
    </Link>
  )
}