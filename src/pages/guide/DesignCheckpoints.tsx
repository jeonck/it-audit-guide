const DesignCheckpoints = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">시스템 개발 사업의 설계 단계 감리 점검포인트</h2>
        <p className="text-lg text-gray-600">
          설계 단계 감리의 주요 목적은 설계 산출물이 과업내용을 적정하게 반영하고 있는지, 그리고 대비표(요구사항 추적표)가 세부 검사항목별로 적합·부적합 판정을 할 수 있도록 구체화되었는지를 점검하는 것입니다. 
          감리 영역별 표준 점검 항목은 적용된 개발 방법론에 따라 다르게 제시됩니다.
        </p>
      </div>

      {/* 3. 핵심 점검 사항 */}
      <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">설계 단계 감리 시 핵심 점검 사항</h3>
        <p className="text-yellow-900">
          설계 단계 감리 시, 감리원은 <strong>대비표(요구사항 추적표)</strong>를 중점적으로 검토해야 합니다. 대비표는 개별 요구사항에 대한 설계 결과를 반영하며, 요구사항 ID 단위로 설계 내용과 검사 대상 및 검사 기준을 추적하고 점검할 수 있는 문서여야 합니다.
        </p>
        <ul className="list-disc list-inside text-yellow-900 mt-2 space-y-1">
          <li>설계 산출물 정보 누락 여부, 각 요구사항 ID에 대응하는 세부 검사항목과 검사기준의 완전성 등 대비표의 형식적 구성 요건을 점검합니다.</li>
          <li>설계 산출물이 분석 단계 산출물과 일관성을 유지하는지, 구현 단계에 활용 가능한 수준으로 작성되었는지 여부를 전반적으로 점검해야 합니다.</li>
        </ul>
      </div>

      {/* 1. 구조적/정보공학적 개발 모델 */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">1. 구조적/정보공학적 개발 모델 (설계 시점)</h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">가. 시스템 구조</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>시스템 구성요소에 대한 상세설계의 충분성</li>
              <li>시스템 보안에 대한 상세설계의 적정성</li>
              <li>시스템 설치 및 검증 계획의 적정성</li>
              <li>시스템 전환 계획의 적정성</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">나. 응용 시스템</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>프로그램 분할의 적정성</li>
              <li>업무 기능 설계의 상세성 및 누락 여부</li>
              <li>사용자 인터페이스의 편의성</li>
              <li>내/외부 인터페이스 설계의 충분성, 적정성</li>
              <li>접근권한 및 통제 설계의 적정성</li>
              <li>단위시험 계획의 적정성</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">다. 데이터 베이스</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>데이터베이스 테이블 설계의 적정성</li>
              <li>공통 코드 설계의 적정성</li>
              <li>데이터베이스 성능 고려 여부</li>
              <li>접근권한 및 통제 설계의 적정성</li>
              <li>백업 및 복구대책 수립의 적정성</li>
              <li>초기데이터 구축 계획의 적정성</li>
              <li>기존 데이터 전환 계획의 적정성</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">라. 품질보증 활동</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>방법론 및 절차/표준의 준수 여부</li>
              <li>이전/다음 단계 반복계획 수립의 적정성</li>
              <li>품질보증활동 수행의 적정성</li>
              <li>사용자 요구사항 및 산출물 간의 추적성, 일관성</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCheckpoints;      {/* 2. 객체지향/컴포넌트기반 개발 모델 */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">2. 객체지향/컴포넌트기반 개발 모델 (분석/설계 시점)</h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">가. 시스템 구조</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>최종 시스템 아키텍처 정의 및 설계의 적정성</li>
              <li>시스템 아키텍처 프로토타이핑을 통한 기술검증의 적정성</li>
              <li>시스템 보안 상세설계의 적정성</li>
              <li>시스템 설치 및 검증 계획의 적정성</li>
              <li>시스템 전환계획의 적정성</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">나. 응용 시스템</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>분석 클래스 정제 및 클래스 상세설계의 충분성, 적정성</li>
              <li>사용자 인터페이스 및 보고서 설계의 편의성</li>
              <li>내/외부 인터페이스 분석/설계의 충분성, 적정성</li>
              <li>접근권한 및 통제 분석/설계의 적정성</li>
              <li>컴포넌트 도입/구현을 위한 상세 설계의 적정성</li>
              <li>단위시험 계획의 적정성</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">다. 데이터 베이스</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>엔티티 클래스 정제 및 상세설계의 충분성, 적정성</li>
              <li>데이터베이스 상세설계(테이블, 성능, 보안, 코드)의 적정성</li>
              <li>백업 및 복구대책 수립의 적정성</li>
              <li>초기데이터 구축 계획의 적정성</li>
              <li>기존 데이터 전환 계획의 적정성</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">라. 품질보증 활동</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>방법론 및 절차/표준의 준수 여부</li>
              <li>사용자 요구사항 및 산출물 간의 추적성, 일관성</li>
              <li>이전/다음 단계 반복계획 수립의 적정성</li>
              <li>품질보증활동 수행의 적정성</li>
              <li>시스템 전환 전략 수립의 적정성</li>
            </ul>
          </div>
        </div>
      </div>
