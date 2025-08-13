import styled from "styled-components";
import onlabLogo from '/Logo.svg'
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <Content>
        <StyledLink to="/">
          <Logo src={onlabLogo} alt="온랩 로고" />
        </StyledLink>
        <Title>📄 서비스 이용 약관</Title>

        <Section>
          본 약관은 사용자(이하 “이용자”)가 감정 자가진단 앱 “마음온도”(이하 “서비스”)를 이용함에 있어 필요한 권리, 의무 및 책임사항을 규정합니다. 서비스를 이용하기 전, 아래 내용을 주의 깊게 읽어주시기 바랍니다.
        </Section>

        <Divider />

        <SectionTitle>제1조 (목적)</SectionTitle>
        <Section>
          본 약관은 “서비스”의 제공 조건 및 이용과 관련한 “온랩”과 “이용자” 간의 권리, 의무, 책임사항, 기타 필요한 사항을 규정하는 것을 목적으로 합니다.
        </Section>

        <Divider />

        <SectionTitle>제2조 (정의)</SectionTitle>
        <Section>
          1. “서비스”란 사용자의 감정을 매일 기록하고 확인하며 돌아볼 수 있도록 돕는 감정 자가진단 앱을 의미합니다.<br/>
          2. “이용자”란 본 약관에 따라 “서비스”에 접속하여 이용하는 개인을 말합니다.<br/>
          3. “온랩”이란 “서비스”를 운영 및 제공하는 주체를 의미합니다.<br/>
          4. “콘텐츠”란 감정 진단 결과에 따라 제공되는 문구, 영상, 음악 등 다양한 형태의 정보를 의미합니다.
        </Section>

        <Divider />

        <SectionTitle>제3조 (서비스 내용)</SectionTitle>
        <Section>
          “서비스”는 다음과 같은 기능을 제공합니다:
          <List>
            <li><strong>감정 자가진단</strong> – 감정 선택 입력, 강도 기록, 메모 작성 등 감정 상태 입력 기능</li>
            <li><strong>감정 시각화 및 히스토리</strong> – 감정 변화를 시각적으로 확인할 수 있는 그래프 및 일기 형태 열람</li>
            <li><strong>감정 응원 콘텐츠 제공</strong> – 감정에 따른 위로 메시지, 영상, 음악 등의 콘텐츠 추천</li>
            <li><strong>알림 및 리마인더</strong> – 감정 진단 알림, 맞춤 알림 문구 설정 기능</li>
            <li><strong>익명 감정 공유</strong> – 감정 기록을 익명으로 공유할 수 있는 커뮤니티 기능</li>
            <li><strong>부가 기능 (교육 기관 연동)</strong> – 감정 위험 알림, 상담 요청 기능, 관리자 대시보드, 보호자 보고서 등 <em>(이용자 선택 및 동의 필수)</em></li>
          </List>
        </Section>

        <Divider />

        <SectionTitle>제4조 (이용자의 권리와 의무)</SectionTitle>
        <Section>
          1. <strong>이용자는</strong> 언제든지 자신의 감정 기록을 열람, 수정, 삭제할 수 있습니다.<br/>
          2. <strong>이용자는</strong> 타인의 감정을 존중하며 커뮤니티 내에서 예의 있는 표현을 사용해야 합니다.<br/>
          3. <strong>이용자는</strong> 자신의 계정 정보 및 개인정보를 타인과 공유해서는 안 됩니다.<br/>
          4. <strong>이용자는</strong> 서비스의 비정상적인 사용, 해킹 시도, 불법 콘텐츠 등록 등의 행위를 해서는 안 됩니다.
        </Section>

        <Divider />

        <SectionTitle>제5조 (개인정보 보호)</SectionTitle>
        <Section>
          1. “온랩”은 이용자의 개인정보를 관련 법령에 따라 안전하게 보호하며, 별도의 <strong>개인정보처리방침</strong>에 따라 수집, 저장, 처리합니다.<br/>
          2. 감정 기록은 개인 식별이 불가능한 방식으로 저장되며, <strong>동의 없이 제3자에게 제공되지 않습니다.</strong><br/>
          3. 위클래스 연동, 상담 요청, 보호자 보고 기능은 <strong>이용자의 명시적 동의 후에만 활성화됩니다.</strong>
        </Section>

        <Divider />

        <SectionTitle>제6조 (서비스 이용 제한)</SectionTitle>
        <Section>
          “온랩”은 다음과 같은 경우 사전 통지 없이 서비스 이용을 제한할 수 있습니다:
          <List>
            <li>타인의 명예를 훼손하거나 불쾌감을 주는 표현 사용</li>
            <li>악의적인 콘텐츠 도배 및 시스템 오용</li>
            <li>운영자 및 관리자 사칭</li>
            <li>관련 법령 및 본 약관 위반</li>
          </List>
        </Section>

        <Divider />

        <SectionTitle>제7조 (지적 재산권)</SectionTitle>
        <Section>
          “서비스”에 포함된 모든 콘텐츠, 디자인, 기능 등은 “온랩”에 귀속되며, “이용자”는 이를 무단 복제, 배포, 변경할 수 없습니다.
        </Section>

        <Divider />

        <SectionTitle>제8조 (책임의 제한)</SectionTitle>
        <Section>
          1. “온랩”은 감정 자가진단 결과 및 추천 콘텐츠가 의료적 진단이나 상담을 대체하지 않음을 명확히 합니다.<br/>
          2. “이용자”는 감정 상태가 지속적으로 불안정할 경우 전문가의 상담 또는 진료를 권장받을 수 있습니다.<br/>
          3. “온랩”은 시스템 유지 및 보수를 위해 일시적으로 서비스를 중단할 수 있으며, 사전에 고지합니다.
        </Section>

        <Divider />

        <SectionTitle>제9조 (약관 변경)</SectionTitle>
        <Section>
          “온랩”은 관련 법령을 준수하며 약관을 개정할 수 있으며, 변경 사항은 앱 내 공지사항 또는 이메일을 통해 사전 고지합니다.
        </Section>

        <Divider />

        <SectionTitle>제10조 (문의처)</SectionTitle>
        <Section>
          - 이메일: onlab2025@gmail.com<br/>
          - 고객센터 운영시간: 평일 09:00 ~ 18:00
        </Section>

        <Divider />
        <Section><strong>부칙:</strong> 본 약관은 2025년 7월 14일부터 적용됩니다.</Section>
      </Content>
    </Container>
  );
};

export default Terms;

const Container = styled.div`
  padding: 1360px 20px 100px; 
  width: 100vw;
  margin: 30px auto;
  color: ${({ theme }) => theme.textColor};
  overflow-y: auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bgColor};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.img`
  margin: 28px 0;
  height: 80px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin: 24px 0 8px;
`;

const Section = styled.div`
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-line;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.textColor};
  margin: 24px 0;
`;

const List = styled.ul`
  margin-top: 10px;
  margin-left: 18px;
  li {
    margin-bottom: 8px;
  }
`;
