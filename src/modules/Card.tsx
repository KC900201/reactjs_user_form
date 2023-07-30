import * as React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.section`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: #ffffff;
  margin: 1rem auto;
  width: 500px;
  border-radius: 10px;
`
type CardProps = {
  cardStyle?: React.CSSProperties | undefined
  children: React.ReactNode
}

function Card({ cardStyle, children }: CardProps) {
  return <CardWrapper style={cardStyle}>{children}</CardWrapper>
}

export default Card
