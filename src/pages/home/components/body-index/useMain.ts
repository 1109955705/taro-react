import { useEffect, useState } from 'react';

interface listType {
  name: string;
  value: number | string;
}

const useMain = (lastMeasure) => {
  const [list, setList] = useState<listType[]>([]);

  const handleDate = (measure) => {
    const {
      weight,
      bmi,
      bodyfat,
      water,
      muscle,
      sinew,
      bone,
      fatFreeWeight,
      protein,
      subfat,
      visfat,
      bodyage,
      bodyShape,
      bmr,
    } = measure;

    const indexList = [
      {
        name: '体重',
        value: weight,
      },
      {
        name: 'BMI',
        value: bmi,
      },
      {
        name: '体脂率',
        value: bodyfat,
      },
      {
        name: '体水分',
        value: water,
      },
      {
        name: '骨骼肌率',
        value: muscle,
      },
      {
        name: '肌肉量',
        value: sinew,
      },
      {
        name: '骨量',
        value: bone,
      },
      {
        name: '去脂体重',
        value: fatFreeWeight,
      },
      {
        name: '蛋白质',
        value: protein,
      },
      {
        name: '皮下脂肪',
        value: subfat,
      },
      {
        name: '内脏脂肪',
        value: visfat,
      },
      {
        name: '体年龄',
        value: bodyage,
      },
      {
        name: '体型',
        value: bodyShape,
      },
      {
        name: '基础代谢',
        value: bmr,
      },
    ];

    setList(indexList);
  };

  useEffect(() => {
    if (!lastMeasure?.weight) return;
    handleDate(lastMeasure);
  }, [lastMeasure]);

  return {
    list,
  };
};

export default useMain;
