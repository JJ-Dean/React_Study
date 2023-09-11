import React from 'react';

import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식을 빠르게 배달해드립니다.</h2>
      <p>
        띵동~~ 맛있는 음식이 우리 집 문 앞에? 벌써? 앗 뜨거~! 이거 어디서
        시켰어? 석주를 김에 싸서 맛있게 먹어보세요.
      </p>
      <p>
        노련한 쉐프가 최상의 식재료로 요리한 음식을 지금 당장 먹어보세요.
        배달시킨 따ㅡ끈한 음식이 우리집 문 앞으로!
      </p>
    </section>
  );
};

export default MealsSummary;
