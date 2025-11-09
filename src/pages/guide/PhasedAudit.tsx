const PhasedAudit = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">개발 사업에서의 특수성 (단계별 감리의 적용)</h2>
        <p className="text-lg text-gray-600">
          정보시스템 개발 사업의 경우, 「정보시스템 감리기준」에 따라 요구정의단계, 설계단계, 종료단계의 3단계 감리를 적용해야 합니다. 
          이는 법적 의무 사항이며, 감리 수행 절차 내에서 수행해야 할 작업 내역을 구체적으로 규정합니다.
        </p>
      </div>

      <div className="my-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">3단계 감리 프로세스</h3>
        <div className="flex items-center justify-center space-x-2 md:space-x-4">
          {/* Block 1 */}
          <div className="flex-1 text-center p-4 bg-blue-100 border-2 border-blue-300 rounded-lg shadow-md">
            <p className="font-bold text-blue-800">요구정의단계</p>
            <small className="text-blue-700 text-xs mt-1 block">과업내용 반영 적정성</small>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-500">→</div>

          {/* Block 2 */}
          <div className="flex-1 text-center p-4 bg-green-100 border-2 border-green-300 rounded-lg shadow-md">
            <p className="font-bold text-green-800">설계단계</p>
            <small className="text-green-700 text-xs mt-1 block">과업내용 반영 여부 및 대비표의 구체화 여부</small>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-500">→</div>

          {/* Block 3 */}
          <div className="flex-1 text-center p-4 bg-purple-100 border-2 border-purple-300 rounded-lg shadow-md">
            <p className="font-bold text-purple-800">종료단계</p>
            <small className="text-purple-700 text-xs mt-1 block">과업내용 이행 여부</small>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">감리 유형/단계</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">적용 범위 및 방법론적 차이</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 align-top whitespace-nowrap font-medium text-gray-900">3단계 감리 (개발 사업)</td>
                  <td className="px-6 py-4 text-gray-600">
                    감리계획서에 제시된 3단계별(요구정의, 설계, 종료) 세부 검사항목을 중점적으로 적용합니다. 
                    특히, <strong>요구정의단계</strong>에서는 계약문서와 요구사항정의서 간의 <strong>과업내용 반영 적정성</strong>, 
                    <strong>설계단계</strong>에서는 설계 산출물의 <strong>과업내용 반영 여부 및 대비표의 구체화 여부</strong>, 
                    <strong>종료단계</strong>에서는 <strong>과업내용 이행 여부</strong>를 적합/부적합으로 명시하여 점검합니다.
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 align-top whitespace-nowrap font-medium text-gray-900">일반 감리 (ISP, 운영 등)</td>
                  <td className="px-6 py-4 text-gray-600">
                    3단계 감리별 작업 내역이 아닌, ISP, DB 구축, 운영, 유지보수 등 <strong>다양한 정보화사업에 적용할 수 있는 공통 작업 내역</strong>을 기준으로 감리를 수행합니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhasedAudit;
