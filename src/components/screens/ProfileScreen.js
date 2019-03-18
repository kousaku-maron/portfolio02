import * as React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import AvatarImageTemp from '../../constants/avatar.jpeg'
import FluidButton from '../button/FluidButton'

const ProfileScreen = props => {
  return (
    <Root>
      <Section>
        <Grow>
          <Thumbnail
            src={AvatarImageTemp}
            alt='avatar'
          />
        </Grow>
        <Grow>
          <h1>Kosaku Kurino</h1>
        </Grow>
        <Grow>
          <BasicInfo>
            <p>25歳</p>
            <p>エンジニア歴3年</p>
            <p>フロントエンドエンジニア/Unityエンジニア</p>
            <p>趣味 ボルダリング/太鼓の達人</p>
            {/* <p><Link target='_blank' href='https://qiita.com/kousaku-maron'>Qiita</Link></p>
            <p><Link target='_blank' href='https://github.com/kousaku-maron?tab=repositories'>Github</Link></p> */}
          </BasicInfo>
        </Grow>
      </Section>
      <Section>
        <Grow>
          <h1>使える言語</h1>
        </Grow>
        <Grow>
          <LangBox>
            <p>Nodejs</p>
          </LangBox>
          <LangBox>
            <p>C# for Unity</p>
          </LangBox>
          <LangBox>
            <p>Python</p>
          </LangBox>
        </Grow>
      </Section>
      <Section>
        <Grow>
          <h1>使えるクラウドサービス</h1>
        </Grow>
        <Grow>
          <LangBox>
            <p>AWS</p>
          </LangBox>
          <LangBox>
            <p>Azure</p>
          </LangBox>
          <LangBox>
            <p>GCP</p>
          </LangBox>
          <LangBox>
            <p>Firebase</p>
          </LangBox>
        </Grow>
      </Section>
      <Section>
        <Grow>
          <h1>経験してきたこと</h1>
        </Grow>
        <Grow>準備中・・・</Grow>
      </Section>
      <Section>
        <Grow>
          <h1>作品</h1>
        </Grow>
        <Grow>準備中・・・</Grow>
      </Section>>
    </Root>
  )
}

const Root = styled.div`
  width: 100%
  padding: 24px
`

const Section = styled.div`
  display: flex
  flex-direction: column
  margin-bottom: 48px
`

const Grow = styled.div`
  display: flex
  flex-grow: 1
  justify-content: center
  align-items: center
`

const Thumbnail = styled.img`
  width: 300px
  height: 300px
  border-radius: 150px
`

const BasicInfo = styled.div`
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
`

// const Link = styled.a`
//   decolation: none
// `

const LangBox = styled.div`
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 200px
  height: 100px
  border-radius: 50px
  border: 1px solid ${colors.priamry.main}
  margin: 12px
`

const ExpBox = styled.div`
  flex-grow: 1
  width: 100%
  min-height: 100px
  border-radius: 10px
  border: 1px solid ${colors.priamry.main}
`

export default ProfileScreen
