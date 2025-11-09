const ProjectTypeDifferences = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">정보화사업 유형별 차이점</h2>
        <p className="text-lg text-gray-600">
          감리의 핵심 수행 절차(방법론)는 사업 유형에 관계없이 동일하게 적용되지만, 사업의 성격에 따라 <strong>표준 점검 항목</strong> 및 <strong>단계별 적용 방식</strong>에 명확한 차이가 있습니다.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">사업 유형</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주요 점검 영역 (핵심 초점)</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주요 점검 항목 예시</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">정보화전략계획 (ISP) 수립</td>
                  <td className="px-6 py-4 text-gray-600">전략 및 계획의 적정성, 개선모델의 실현 가능성</td>
                  <td className="px-6 py-4 text-gray-600">조직 목표와 전략 식별, 업무 개선 모델 적정성, 사용자 요구사항 도출 및 분석의 충분성</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">시스템 개발 사업</td>
                  <td className="px-6 py-4 text-gray-600">산출물 품질 및 추적성, 시스템 설계 적정성, 요구사항 이행 여부</td>
                  <td className="px-6 py-4 text-gray-600">데이터 모델링 명확성, UI 편의성, 업무 기능 구현의 충분성 및 완전성</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">시스템 운영 사업</td>
                  <td className="px-6 py-4 text-gray-600">서비스 지속성과 안정성, 인프라 및 개발 SW 관리 체계</td>
                  <td className="px-6 py-4 text-gray-600">서비스 수준 협의서(SLA) 관리, 보안 정책 및 체계, 인시던트 및 서비스 요청 관리</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-3">핵심 차이점</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>ISP 사업:</strong> 감리 영역은 주로 업무(전략), 기술(아키텍처), 정보화 계획에 초점을 맞추며, 정보화 목표와 전략 간의 일관성 및 개선 모델 도출의 적정성 등 미래 계획의 타당성과 충분성을 검토합니다.</li>
          <li><strong>시스템 개발 사업:</strong> 감리 영역은 시스템 구조, 응용 시스템, 데이터베이스를 중심으로, 각 단계별 산출물 품질, 요구사항의 추적성, 일관성, 기능 구현의 완전성 등 구현 과정과 결과물의 적합성을 검토합니다.</li>
          <li><strong>시스템 운영 사업:</strong> 감리 영역은 인프라와 <strong>개발 소프트웨어(유지보수)</strong>에 초점을 맞추며, 운영 절차, 서비스 수준(SLA), 용량 관리, 장애 관리, 보안 관리 등 서비스의 지속적인 제공과 품질을 검토합니다.</li>
        </ul>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-3">감리 방법론의 적용 방식</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-700">기본 절차의 보편성</h4>
            <p className="mt-1 text-gray-600">모든 사업 유형에 <strong>예비조사 → 현장감리 → 시정조치확인</strong>의 동일한 기본 절차를 적용합니다.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700">개발 사업의 특수성 (3단계 감리)</h4>
            <p className="mt-1 text-gray-600">법적 의무사항으로 <strong>요구정의, 설계, 종료</strong>의 3단계 감리를 적용하여 각 단계별 구체적인 항목을 점검합니다.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700">상주감리의 독립적 적용</h4>
            <p className="mt-1 text-gray-600">단계별 감리와 별개로, 현장에 상주하며 사업관리 관점의 위험 요인을 지속적으로 검토하고 발주자의 의사결정을 지원하는 자문 역할을 수행합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTypeDifferences;
