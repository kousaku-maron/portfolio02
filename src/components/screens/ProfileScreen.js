import * as React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import AvatarImage from '../../assets/images/avatar.png'
import ExperienceMapImage from '../../assets/images/experience_map.png'

const ProfileScreen = props => {
  return (
    <Root>
      <Container>
        <h1>彼の能力</h1>

        <Section>
          <Thumbnail size={400} src={AvatarImage} />
          
          <SplitSpace />

          <h2>Kosaku Kurino (25)</h2>
          <Text color={colors.tertiary.main}>
            フロントエンドエンジニア/Unityエンジニア<br />
            趣味は、太鼓の達人とロッククライミング(アメリカの崖登りにいきました)<br />
          </Text>
        </Section>

        <Section>
          <h2>Qiita記事</h2>
          <Text color={colors.tertiary.main}>私が書いた技術系ネタの記事です。</Text>
          <Text color={colors.tertiary.main}>準備中・・・</Text>
        </Section>

        <Section>
          <h2>Githubレポジトリ</h2>
          <Text color={colors.tertiary.main}>私が書いたコードのサンプルです。</Text>
          <Text color={colors.tertiary.main}>準備中・・・</Text>
        </Section>

        <Section>
          <h2>使える言語</h2>
          <Text color={colors.tertiary.main}>
            業務で触った言語は、Nodejs、Python、C# (Unity)、VBS、です。<br />
            この中で一番得意な言語はNodejsで、フロントエンドからバックエンドまで全て書けます。<br />
            フロントエンドは React + Redux + (Saga) + Typescript のモダンな書き方で<br />
            業務をこなしてきたので、自信があります。
          </Text>
        </Section>

        <Section>
          <h2>使えるクラウドサービス</h2>
          <Text color={colors.tertiary.main}>
            業務で触ったクラウドサービスは、AWS、Azureです。<br />
            趣味でGCPとFirebaseにも触れています。<br />
            IaaS、PaaS、FaaSをそつなく触れるレベルで、<br />
            FaaSが一番好き(得意)です。<br />
            Firebaseは趣味でしか触れていませんが、<br />
            コアな部分(認証やストレージなど)は業務でやっている人並みに使える自信があります。<br />
            Firebaseのアナリティクス、品質あたりは触っていません。
          </Text>
        </Section>

        <Section>
          <h2>業務経験</h2>

          <SplitSpace />
          
          <Map src={ExperienceMapImage} alt='私の業務経験のイメージ図'/>

          <SplitSpace />

          <Text color={colors.tertiary.main}>
            プロトタイプ開発、スモール規模の開発が得意です。<br />
            また、新しい技術と業務内容のキャッチアップが早いです。<br />
            ほぼ全ての業務をNodejsで実装してきました。
          </Text>

          <SplitSpace />

          <Text color={colors.tertiary.main}>
            「<Bold>新しくできたショールームの支援</Bold>」では、<br />
            新技術を利用したインタラクティブな体験ができるコンテンツが点在していました。<br />
            コンテンツごとにデモ時の操作が複雑だったため、<br />
            コンテンツのブラッシュアップを行い、ある程度自動化できるようにました。<br />
            また、商談時に近未来感を出すためにUnityでコンテンツ操作用アプリを作ったり、<br />
            時には、新しいコンテンツ作成の一部を手伝ったりしていました。
          </Text>

          <SplitSpace />

          <Text color={colors.tertiary.main}>
            「<Bold>ある会社の時期サイトのUX/UIの提案とプロト開発</Bold>」では、<br />
            現サイトでの問題を解決するUX/UIをプロトに組み込み提案していました。<br />
            プロトはReact + Redux + (saga) + Typescript + material-ui で開発していました。<br />
            最後のプロトはコンポーネント設計にAtomic Designを採用しました。<br />
            計3つのプロトを作成しました。<br />
            かなりのスピード感(週2ペースで見せていたため)で実装しなければいけないため、<br />
            Reactでのフロントエンド開発のスピードには自信があります。
          </Text>

          <SplitSpace />

          <Text color={colors.tertiary.main}>他の業務に興味ある方は口頭で説明します。</Text>
        </Section>

      </Container>
    </Root>
  )
}

const Root = styled.div`
  width: 100%
`

const Container = styled.div`
  padding: 48px
`

const Section = styled.div`
  display: flex
  flex-direction: column
  align-items: center
  margin-bottom: 148px
`

const Thumbnail = styled.img`
  width: ${({ size }) => size}px
  height: ${({ size }) => size}px
  border-radius: ${({ size }) => size/2}px
`

const Map = styled.img`
  width: 80%
`

const Text = styled.p`
  text-align: center
  line-height: 5em
  color: ${({ color }) => color}
`

const Bold = styled.span`
  font-weight: bold
`

const SplitSpace = styled.div`
  margin-bottom: 38px
`

export default ProfileScreen
