import styled from 'styled-components';

const StyledSummary = styled.section`
  text-align: center;
  max-width: 45rem;
  width: 90%;
  margin: auto;
  margin-top: -10rem;
  position: relative;
  background-color: #383838;
  color: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

  & h2 {
    font-size: 2rem;
    margin-top: 0;
  }
`;

const MealsSummary = (props) => {
  return (
    <StyledSummary>
      <h2>뜨거운 음식 주문</h2>
      <p>
        먹고 싶은 음식을 담아주세요. 담을 수 있는 음식은 가능한 표시를
        해뒀습니다. 맛있게 드시고 리뷰 남겨주세요. 감사합니다.
      </p>
      <p>
        모든 음식은 최상급 재료로 조리되며, 예상 시간에 딱 맞춰서 도착합니다.
        최상급 쉐프가 요리한건 당연하고요!
      </p>
    </StyledSummary>
  );
};

export default MealsSummary;
