const LegalBasis = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">법적 및 행정적 근거</h2>
        <p className="text-lg text-gray-600">
          본 정보시스템 감리 수행 가이드는 다음의 법률 및 고시를 근거로 하며, 여러 관련 지침과 연관성을 가집니다.
        </p>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-3">가이드의 직접적인 근거</h3>
        <p className="text-gray-700">
          행정안전부장관이 고시한 <strong>「정보시스템 감리기준」 제23조</strong>에 따라 한국지능정보사회진흥원장이 정하여 공지하는 공식 지침입니다.
        </p>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-3">참고 법률 및 고시</h3>
        <ul className="list-decimal list-inside text-gray-700 space-y-2">
          <li>전자정부법</li>
          <li>전자정부법 시행령</li>
          <li>정보시스템 감리기준</li>
          <li>행정기관 및 공공기관 정보시스템 구축·운영 지침</li>
          <li>공공기관의 데이터베이스 표준화 지침</li>
          <li>기획재정부 계약예규 용역계약일반조건</li>
        </ul>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-3">다른 지침과의 연관성</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-700">1. 구축·운영 지침과의 연관성</h4>
            <p className="mt-1 text-gray-600">감리법인은 사업자의 <strong>기술적용계획표 준수 여부</strong>와 <strong>소프트웨어 보안약점 제거 여부</strong>를 점검하고 그 결과를 감리보고서에 의무적으로 반영해야 합니다.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700">2. DB 표준화 지침과의 연관성</h4>
            <p className="mt-1 text-gray-600">감리법인은 발주자의 요구에 따라 <strong>공공데이터베이스 표준화 업무</strong>(코드, 용어, 도메인 표준 적용 등)를 점검하고, 그 결과를 감리보고서에 반영해야 합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalBasis;
