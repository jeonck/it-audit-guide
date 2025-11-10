import React from 'react';

const InspectionCoreComponents: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">정보시스템 감리 점검의 핵심적인 구성 요소와 그 요소들의 상호 관계는 무엇인가?</h1>

      <p className="mb-4">
        정보시스템 감리 점검의 핵심적인 구성 요소는 개념모델을 기반으로 도출된 정보시스템감리점검프레임워크, 기본점검표, 그리고 감리영역별 지침입니다. 이러한 요소들은 정보화 사업의 성공적인 결과 달성을 지원하기 위해 유기적인 관계를 형성하며 감리 활동의 일관성과 체계적인 안정성을 높이는 데 활용됩니다.
      </p>

      <h2 className="text-2xl font-semibold mb-3">비유 (Analogy):</h2>
      <p className="mb-4">
        정보시스템 감리 점검의 핵심 구성 요소를 건물을 짓는 과정에 비유하자면, 개념모델은 건축주와 건축가의 협의를 거쳐 나온 건물의 &apos;목표와 용도&apos;에 대한 청사진(논리적 모델)입니다. 점검프레임워크는 이 청사진을 바탕으로 건물의 &apos;구조와 층별 배치, 용도(사업유형/영역)&apos;를 결정하는 뼈대입니다. 기본점검표는 각 층과 방(감리 영역)에 대해 &apos;반드시 체크해야 할 항목(예: 안전 규정 준수, 창문 개수)&apos;을 나열한 목록이며, 감리영역별 지침은 그 체크리스트 항목을 확인하기 위해 &apos;사용해야 할 측정 도구와 상세 검사 방법, 기준(감리관점/점검기준)&apos;을 담은 시공 매뉴얼과 같습니다. 이 모든 요소들은 건물이 본래의 목적에 맞게 튼튼하고 안전하게 지어졌는지 확인하기 위해 상호 연결되어 작동합니다.
      </p>

      {/* Block Diagram */}
      <div className="my-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-bold text-center mb-6">건축 과정 비유: 블록 다이어그램</h3>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Block 1 */}
          <div className="flex items-center">
            <div className="p-4 bg-blue-100 border-2 border-blue-300 rounded-lg shadow-md text-center">
              <p className="font-semibold text-blue-800">청사진</p>
              <p className="text-sm text-blue-600">(개념모델)</p>
            </div>
          </div>

          {/* Arrow 1 */}
          <div className="text-2xl font-bold text-gray-500 transform rotate-90 md:rotate-0">→</div>

          {/* Block 2 */}
          <div className="flex items-center">
            <div className="p-4 bg-purple-100 border-2 border-purple-300 rounded-lg shadow-md text-center">
              <p className="font-semibold text-purple-800">뼈대</p>
              <p className="text-sm text-purple-600">(점검프레임워크)</p>
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="text-2xl font-bold text-gray-500 transform rotate-90 md:rotate-0">→</div>

          {/* Block 3 */}
          <div className="flex items-center">
            <div className="p-4 bg-green-100 border-2 border-green-300 rounded-lg shadow-md text-center">
              <p className="font-semibold text-green-800">체크리스트</p>
              <p className="text-sm text-green-600">(기본점검표)</p>
            </div>
          </div>

          {/* Arrow 3 */}
          <div className="text-2xl font-bold text-gray-500 transform rotate-90 md:rotate-0">→</div>

          {/* Block 4 */}
          <div className="flex items-center">
            <div className="p-4 bg-orange-100 border-2 border-orange-300 rounded-lg shadow-md text-center">
              <p className="font-semibold text-orange-800">시공 매뉴얼</p>
              <p className="text-sm text-orange-600">(감리영역별 지침)</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-3">1. 핵심 구성 요소 및 기능</h2>

      <h3 className="text-xl font-medium mb-2">가. 개념모델 (Conceptual Model)</h3>
      <p className="mb-4">
        개념모델은 감리를 시행하기 위한 논리적 모델로, 실제 감리 현장에서 작성된 다양한 사업의 감리보고서를 기반으로 도출되었습니다. 이 모델은 감리 대상 사업의 유형별로 감리시점을 결정하고, 각 시점별로 감리영역을 구분하며, 영역별로 중점점검항목을 선정하여 감리를 시행하는 논리적인 흐름을 개념적으로 표현합니다. 개념모델은 사업유형기반 점검체계를 구성하는 핵심 요소입니다. 여기서 사업유형은 계획(정보화전략계획수립사업), 실행(시스템개발사업, 데이터베이스구축사업), 통제(시스템운영 및 유지보수 사업)의 생명주기를 기반으로 구분됩니다.
      </p>

      <h3 className="text-xl font-medium mb-2">나. 정보시스템감리점검프레임워크 (Inspection Framework)</h3>
      <p className="mb-4">
        점검프레임워크는 개념모델을 바탕으로 도출된 핵심 구성 요소 중 하나입니다. 이 프레임워크는 사업유형/감리시점, 감리영역, 감리관점/점검기준을 통합하여 구성됩니다.
      </p>
      <img src="/정보시스템감리점검프레임워크.png" alt="정보시스템감리점검프레임워크" className="my-4 rounded-lg shadow-md" />
      <ul className="list-disc list-inside mb-4 ml-4">
        <li><strong>사업유형/감리시점:</strong> 감리 대상 사업의 유형(예: 개발, 운영 등)과 이에 적용되는 방법론에 따른 감리 시점(예: 분석, 설계 등)을 구분합니다.</li>
        <li><strong>감리영역:</strong> 감리 영역을 나누고 영역별로 무엇을 점검해야 하는지 정의하는 구분입니다 (예: 사업관리, 아키텍처 등).</li>
        <li><strong>감리관점/점검기준:</strong> 감리원이 점검 활동을 수행할 때 적용해야 할 관점과 기준으로, 일관성을 확보하기 위해 제시됩니다. 이는 정보시스템의 계획 및 구축 활동이 적정하게 수행되어 초기에 목표한 성과(기대효과)를 만족할 수 있도록 위험 요인 및 문제점을 개선하는 것을 목표로 합니다.</li>
        <ul className="list-circle list-inside mb-4 ml-8">
          <li>주요 점검 기준으로는 안정성, 보안성, 효율성, 기능성, 일관성, 무결성, 준거성, 충족성, 실현성, 편의성 등이 포함됩니다.</li>
        </ul>
      </ul>

      <h3 className="text-xl font-medium mb-2">다. 기본점검표 (Basic Checklist)</h3>
      <p className="mb-4">
        기본점검표는 감리기준의 별표 2이며, 점검프레임워크와 개념모델을 바탕으로 도출된 구성 요소입니다. 이 점검표는 사업유형/감리시점/감리영역에 따라 구성되며, 감리원이 점검해야 할 점검항목을 제시합니다.
      </p>

      <h3 className="text-xl font-medium mb-2">라. 감리영역별 지침 (Sectoral Guidelines)</h3>
      <p className="mb-4">
        감리영역별 지침은 총 46개로 구성되어 있으며, 기본점검표에서 정의된 점검항목을 실제로 점검하기 위한 세부적인 검토항목을 제시합니다. 각 검토항목은 다음과 같은 세부 내용으로 구성됩니다:
      </p>
      <ol className="list-decimal list-inside mb-4 ml-4">
        <li><strong>검토의 목적:</strong> 해당 검토항목을 점검하는 목적.</li>
        <li><strong>필요성:</strong> 해당 검토항목이 시스템에 미치는 영향도 및 위험성 등을 기술하여 검토 타당성을 설명함.</li>
        <li><strong>감리관점/점검기준:</strong> 해당 검토항목을 활용하여 감리 시행 시 어떠한 관점과 기준으로 적용할 것인지를 표현합니다.</li>
        <li><strong>주요검토대상산출물:</strong> 해당 점검항목을 점검하기 위해 중점적으로 검토해야 할 대상 산출물(문서, 시스템, 서비스 등)을 정의합니다.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-3">2. 구성 요소들의 상호 관계</h2>
      <p className="mb-4">
        정보시스템 감리 점검의 주요 구성 요소들은 계층적이고 논리적인 흐름을 통해 긴밀하게 연결되어 있습니다.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">관계</th>
              <th className="py-2 px-4 border-b text-left">설명</th>
              <th className="py-2 px-4 border-b text-left">근거</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">개념모델 → 점검프레임워크/기본점검표/지침</td>
              <td className="py-2 px-4 border-b">개념모델은 감리 시행의 논리적 기초를 제공하며, 이를 바탕으로 점검프레임워크, 기본점검표, 감리영역별 지침이 도출됩니다.</td>
              <td className="py-2 px-4 border-b"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">점검프레임워크 → 기본점검표/지침</td>
              <td className="py-2 px-4 border-b">점검프레임워크(사업유형/시점/영역/관점 기준)의 구조에 따라 기본점검표의 점검항목과 감리영역별 지침 및 세부 지침이 구성됩니다.</td>
              <td className="py-2 px-4 border-b"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">기본점검표 ↔ 감리영역별 지침</td>
              <td className="py-2 px-4 border-b">기본점검표가 감리원이 점검해야 할 상위 수준의 점검항목을 정의하면, 감리영역별 지침은 그 점검항목을 구체적으로 검토하기 위한 세부적인 검토항목과 검토 기준(목적, 필요성, 감리관점/점검기준)을 제공합니다.</td>
              <td className="py-2 px-4 border-b"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">감리관점/점검기준 활용</td>
              <td className="py-2 px-4 border-b">감리관점/점검기준은 점검프레임워크의 통합 요소이지만, 기본점검표에서 표현하는 데 한계가 있어 실제로는 감리영역별 지침의 검토항목을 정의하는 데 적용됩니다.</td>
              <td className="py-2 px-4 border-b"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        결론적으로, 정보시스템 감리 점검은 개념모델이라는 청사진 위에서 점검프레임워크라는 구조를 세우고, 이 구조를 따라 기본점검표가 &apos;무엇을 점검할지&apos;를 정의하며, 감리영역별 지침이 &apos;어떻게 점검할지&apos;에 대한 상세한 방법론과 기준(감리관점/점검기준)을 제공함으로써 전체 감리 프로세스가 일관되고 체계적으로 이루어지도록 합니다.
      </p>
    </div>
  );
};

export default InspectionCoreComponents;