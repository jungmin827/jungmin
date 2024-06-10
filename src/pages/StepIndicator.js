import React from 'react';

function StepIndicator() {
  const steps = [
    { id: 1, title: 'STEP 1 날짜 확인' },
    { id: 2, title: 'STEP 2 장소 선택' },
    { id: 3, title: 'STEP 3 경로 보기' }
  ];

  const handleClick = (step) => {
    console.log(`Clicked step ${step.id}`);
    // 여기서 페이지 변경 로직을 추가하거나 상태를 변경할 수 있습니다.
  };

  return (
    <div className="fixed left-0 top-1/4">
      {steps.map(step => (
        <button
          key={step.id}
          className="block w-full text-left p-2 hover:bg-blue-200 focus:bg-blue-300"
          onClick={() => handleClick(step)}
        >
          {step.title}
        </button>
      ))}
    </div>
  );
}

export default StepIndicator;
