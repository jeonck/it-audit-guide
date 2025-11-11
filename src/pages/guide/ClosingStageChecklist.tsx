import React from 'react';

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">{title}</h2>
    {children}
  </div>
);

const Table: React.FC<{ headers: string[]; children: React.ReactNode }> = ({ headers, children }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="py-3 px-5 border-b text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {children}
      </tbody>
    </table>
  </div>
);

const ClosingStageChecklist: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">종료단계 점검항목 (감리 기준 제10조)</h1>
        <p className="text-lg text-gray-600">
          <strong>종료단계 (감리 기준 제10조)</strong>에서 검토해야 하는 영역별 점검 항목 리스트 전체를 사업 유형별로 정리하여 제공합니다.
        </p>
        <p className="mt-2 text-gray-600">
          종료단계 감리는 감리대상사업 검사 전까지 수행되며, 세부 검사항목별 과업내용 이행 여부를 점검하고 그 결과를 적합/부적합으로 명시하여 제출하는 것을 핵심 목적으로 합니다.
        </p>
      </div>

      <SectionCard title="I. 시스템 개발 사업 (SD)의 종료단계 영역별 점검 항목">
        <p className="mb-6 text-gray-700">
          시스템 개발 사업의 종료단계는 주로 시험(Testing) 및 전개(Deployment) 활동과 연관되며, 구조적/정보공학적 모델이든 객체지향/컴포넌트기반 모델이든 해당 단계의 점검 항목은 동일합니다.
        </p>
        <h3 className="text-xl font-semibold text-gray-700 mb-3">A. 시험 (Testing) 단계 점검 항목</h3>
        <Table headers={['감리 영역', '점검 항목']}>
          <tr className="bg-gray-50"><td className="py-3 px-5" rowSpan={7}>시험 활동</td><td className="py-3 px-5">1. 시험 환경을 충분하게 구축하였는지 여부.</td></tr>
          <tr><td className="py-3 px-5">2. 통합 시험 실시 및 검증을 적정하게 수행하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5">3. 시스템 시험 실시 및 검증을 적정하게 수행하였는지 여부.</td></tr>
          <tr><td className="py-3 px-5">4. 시험 결과의 관리 및 개선을 적정하게 수행하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5">5. 시스템 최적화 활동을 적정하게 수행하였는지 여부.</td></tr>
          <tr><td className="py-3 px-5">6. 사용자/운영자 지침서를 적정하게 작성하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5">7. 사용자 인수시험 계획을 적정하게 수립하였는지 여부.</td></tr>
          <tr><td className="py-3 px-5" rowSpan={6}>품질보증 활동</td><td className="py-3 px-5">1. 방법론 및 절차/표준의 준수 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5">2. 이전 단계 반복에 대한 평가 및 다음 단계 반복 계획 수립이 적정한지 여부.</td></tr>
          <tr><td className="py-3 px-5">3. 품질보증 활동을 적정하게 수행하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5">4. 사용자 요구사항 및 관련 산출물 간의 추적성, 일관성.</td></tr>
          <tr><td className="py-3 px-5">5. 사업 목표의 달성 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5">6. 교육 계획을 적정하게 수립하였는지 여부.</td></tr>
        </Table>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-3">B. 전개 (Deployment) 단계 점검 항목</h3>
        <Table headers={['감리 영역', '점검 항목']}>
          <tr className="bg-gray-50"><td className="py-3 px-5" rowSpan={4}>운영 준비</td><td className="py-3 px-5">1. 운영 환경의 설치 및 배포를 완전하게 수행하였는지 여부.</td></tr>
          <tr><td className="py-3 px-5">2. 초기 데이터 구축 및 데이터 전환/검증을 적정하게 수행하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5">3. 시스템 및 업무 전환을 적정하게 수행하였는지 여부.</td></tr>
          <tr><td className="py-3 px-5">4. 사용자 인수시험을 수행하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5" rowSpan={3}>품질보증 활동</td><td className="py-3 px-5">1. 방법론 및 절차/표준의 준수 여부.</td></tr>
          <tr><td className="py-3 px-5">2. 사용자 교육을 적정하게 실시하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5">3. 인수 운영 조직을 적정하게 구성하였는지 여부.</td></tr>
        </Table>
      </SectionCard>

      <SectionCard title="II. 사업 관리 (PM)의 종료단계 점검 항목">
        <p className="mb-6 text-gray-700">사업 관리 영역에서 종료 단계의 핵심 점검 항목은 사업의 최종 목표 달성 여부와 관련됩니다.</p>
        <Table headers={['감리 시점', '감리 영역', '점검 항목']}>
          <tr className="bg-gray-50"><td className="py-3 px-5">종료</td><td className="py-3 px-5">사업 관리</td><td className="py-3 px-5">1. 계획된 일정 내에 사용자의 요구사항을 만족하여 사업을 정상적으로 완료할 수 있는지 점검.</td></tr>
        </Table>
      </SectionCard>

      <SectionCard title="III. 데이터베이스 구축 사업 (DB)의 최종 단계 점검 항목">
        <p className="mb-6 text-gray-700">DB 구축 사업은 별도의 &apos;종료단계&apos; 대신 구축(Construction) 단계의 <strong>품질 검사(Quality Inspection)</strong>를 통해 최종 품질 목표 달성 여부를 확인합니다.</p>
        <Table headers={['감리 시점', '감리 영역', '점검 항목']}>
          <tr className="bg-gray-50"><td className="py-3 px-5">구축</td><td className="py-3 px-5">품질 검사</td><td className="py-3 px-5">1. 계획에 따라 품질보증활동이 적정하게 수행되었는지 여부.</td></tr>
          <tr><td className="py-3 px-5"></td><td className="py-3 px-5"></td><td className="py-3 px-5">2. 검사지침에 따른 검사실시의 적정성.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5"></td><td className="py-3 px-5"></td><td className="py-3 px-5">3. 구축된 데이터의 품질 목표 달성 여부.</td></tr>
        </Table>
      </SectionCard>

      <SectionCard title="IV. 법적 기준에 따른 의무 점검 사항">
        <p className="mb-6 text-gray-700">종료단계 감리 시 사업 유형과 관계없이 「정보시스템 감리기준」 및 관련 고시에 따라 반드시 확인하고 보고서에 명시해야 하는 항목들입니다.</p>
        <Table headers={['구분', '근거 법령/지침', '점검 항목 (핵심 내용)']}>
          <tr className="bg-gray-50"><td className="py-3 px-5">과업 이행 확인</td><td className="py-3 px-5">감리기준 제10조제1항</td><td className="py-3 px-5">설계단계에서 구체화된 세부 검사항목별 과업내용 이행 여부를 점검하고, 그 결과를 적합/부적합으로 명시해야 함.</td></tr>
          <tr><td className="py-3 px-5">기술적용 결과표</td><td className="py-3 px-5">구축·운영지침 제49조제2항</td><td className="py-3 px-5">사업자가 제출한 기술적용결과표 준수 여부 점검.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5">소프트웨어 보안</td><td className="py-3 px-5">구축·운영지침 제53조제2항</td><td className="py-3 px-5">사업자가 소프트웨어 보안약점 제거 여부 진단.</td></tr>
          <tr><td className="py-3 px-5">DB 표준/산출물</td><td className="py-3 px-5">DB표준화지침 제14조4항</td><td className="py-3 px-5">데이터베이스 표준 적용 및 데이터베이스 산출물 작성 여부 점검.</td></tr>
        </Table>
      </SectionCard>

      <SectionCard title="종료단계 영역별 점검 항목 전체 리스트">
        <p className="mb-4 text-gray-700">요청하신 정보시스템 개발 사업의 <strong>종료단계(감리기준 제10조)</strong>에서 영역별로 검토해야 할 표준 점검 항목 리스트를 전체적으로 정리하여 제공합니다.</p>
        <p className="mb-6 text-gray-700">정보시스템 개발 사업에서 종료단계는 통상적으로 시험(Testing) 단계와 전개(Deployment) 단계를 포함하며, 최종적으로 과업내용 이행 여부를 실증 점검하고 그 결과를 적합/부적합으로 판정하는 것을 주된 목적으로 합니다. 아래 리스트는 표준 점검표(구조적/정보공학적 모델 및 객체지향/컴포넌트기반 모델의 시험/전개 단계)를 기준으로 요청하신 영역별로 통합하여 구성되었습니다.</p>
        
        <h3 className="text-xl font-semibold text-gray-700 mb-3">1. 사업관리 및 품질보증활동 (PM & QA) 점검 항목</h3>
        <p className="mb-4 text-gray-600">종료단계에서 사업관리 및 품질보증 활동은 사업 목표 달성 여부, 최종적인 절차 준수, 교육 및 조직 인수 준비 상태를 중점적으로 확인합니다.</p>
        <Table headers={['구분', '영역', '점검 항목']}>
          <tr className="bg-gray-50"><td className="py-3 px-5" rowSpan={2}>사업 관리 (PM03-1)</td><td className="py-3 px-5">종료</td><td className="py-3 px-5">1. 계획된 일정 내에 사용자의 요구사항을 만족하여 사업을 정상적으로 완료할 수 있는지 점검.</td></tr>
          <tr><td className="py-3 px-5"></td><td className="py-3 px-5">2. 계약 문서, 사용자 요구사항에서 정의된 기능적/비기능적 요구사항들이 충분하게 완수되었고 추적 가능한지 확인.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5" rowSpan={6}>품질보증 활동 (시험 단계)</td><td className="py-3 px-5">품질보증 활동</td><td className="py-3 px-5">1. 사업 목표의 달성 여부.</td></tr>
          <tr><td className="py-3 px-5"></td><td className="py-3 px-5">2. 방법론 및 절차/표준의 준수 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5"></td><td className="py-3 px-5">3. 이전 단계 반복에 대한 평가 및 다음 단계 반복 계획 수립이 적정한지 여부.</td></tr>
          <tr><td className="py-3 px-5"></td><td className="py-3 px-5">4. 품질보증 활동을 적정하게 수행하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5"></td><td className="py-3 px-5">5. 사용자 요구사항 및 관련 산출물 간의 추적성, 일관성.</td></tr>
          <tr><td className="py-3 px-5"></td><td className="py-3 px-5">6. 교육 계획을 적정하게 수립하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5" rowSpan={3}>품질보증 활동 (전개 단계)</td><td className="py-3 px-5">품질보증 활동</td><td className="py-3 px-5">7. 사용자 교육을 적정하게 실시하였는지 여부.</td></tr>
          <tr><td className="py-3 px-5"></td><td className="py-3 px-5">8. 인수 운영 조직을 적정하게 구성하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5"></td><td className="py-3 px-5">9. 방법론 및 절차/표준의 준수 여부.</td></tr>
          <tr><td className="py-3 px-5" rowSpan={2}>법적 의무 점검 항목</td><td className="py-3 px-5">(공통)</td><td className="py-3 px-5">10. 사업자가 제출한 기술적용 결과표의 준수 여부 점검.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5"></td><td className="py-3 px-5">11. 과업내용 이행 여부 점검 (적합/부적합 명시) [감리기준 제10조].</td></tr>
        </Table>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-3">2. 응용시스템 (Application System) 점검 항목</h3>
        <p className="mb-4 text-gray-600">응용시스템에 대한 최종 점검은 주로 시험 활동과 운영 준비 활동에 포함되어, 기능의 완전성 및 사용자 편의성을 확인합니다.</p>
        <Table headers={['구분', '영역', '점검 항목']}>
          <tr className="bg-gray-50"><td className="py-3 px-5" rowSpan={4}>시험 활동</td><td className="py-3 px-5">시험 활동</td><td className="py-3 px-5">1. 통합 시험 실시 및 검증을 적정하게 수행하였는지 여부.</td></tr>
          <tr><td className="py-3 px-5"></td><td className="py-3 px-5">2. 시험 결과의 관리 및 개선을 적정하게 수행하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5"></td><td className="py-3 px-5">3. 사용자/운영자 지침서를 적정하게 작성하였는지 여부.</td></tr>
          <tr><td className="py-3 px-5"></td><td className="py-3 px-5">4. 사용자 인수시험 계획을 적정하게 수립하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5" rowSpan={2}>운영 준비</td><td className="py-3 px-5">운영 준비</td><td className="py-3 px-5">5. 시스템 및 업무 전환을 적정하게 수행하였는지 여부.</td></tr>
          <tr><td className="py-3 px-5"></td><td className="py-3 px-5">6. 사용자 인수시험을 수행하였는지 여부 (최종 사용자의 승인 획득).</td></tr>
        </Table>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-3">3. 시스템 아키텍처 및 보안 (System Architecture & Security) 점검 항목</h3>
        <p className="mb-4 text-gray-600">시스템 아키텍처 및 보안 관련 점검은 최종 시스템의 안정성, 성능 최적화, 보안 구현 상태를 확인합니다.</p>
        <Table headers={['구분', '영역', '점검 항목']}>
          <tr className="bg-gray-50"><td className="py-3 px-5" rowSpan={4}>시험 활동</td><td className="py-3 px-5">시험 활동</td><td className="py-3 px-5">1. 시험 환경을 충분하게 구축하였는지 여부 (운영 환경 반영 여부).</td></tr>
          <tr><td className="py-3 px-5"></td><td className="py-3 px-5">2. 시스템 시험 실시 및 검증을 적정하게 수행하였는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5"></td><td className="py-3 px-5">3. 통합시험과 시스템시험 결과를 반영하여 시스템 최적화 활동을 적정하게 수행하였는지 여부 (성능 튜닝 및 결과 평가).</td></tr>
          <tr><td className="py-3 px-5"></td><td className="py-3 px-5">4. 시스템 시험을 통해 성능 및 가용성, 보안성에 대한 검증이 이루어졌는가? (시스템 성능/가용성/보안성 목표 만족 여부).</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5">운영 준비</td><td className="py-3 px-5">운영 준비</td><td className="py-3 px-5">5. 운영 환경의 설치 및 배포를 완전하게 수행하였는지 여부 (HW, SW, 응용시스템 완전 설치/배포).</td></tr>
          <tr><td className="py-3 px-5">법적 의무 점검 항목</td><td className="py-3 px-5">(공통)</td><td className="py-3 px-5">6. 사업자가 소프트웨어 보안약점 제거 여부를 진단했는지 여부.</td></tr>
        </Table>

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-3">4. 데이터베이스 (Database) 점검 항목</h3>
        <p className="mb-4 text-gray-600">데이터베이스 영역의 종료단계 점검은 데이터의 최종 무결성 확보와 전환/운영 준비에 중점을 둡니다.</p>
        <Table headers={['구분', '영역', '점검 항목']}>
          <tr className="bg-gray-50"><td className="py-3 px-5">운영 준비</td><td className="py-3 px-5">운영 준비</td><td className="py-3 px-5">1. 초기 데이터 구축 및 데이터 전환/검증을 적정하게 수행하고 검증되었는지 여부.</td></tr>
          <tr><td className="py-3 px-5">법적 의무 점검 항목</td><td className="py-3 px-5">(공통)</td><td className="py-3 px-5">2. 데이터베이스 표준 적용 및 데이터베이스 산출물 작성이 적정하게 이루어졌는지 여부.</td></tr>
          <tr className="bg-gray-50"><td className="py-3 px-5">참고</td><td className="py-3 px-5">(DB 구축 사업)</td><td className="py-3 px-5">3. (데이터베이스 구축 사업의 경우) 구축된 데이터가 사전에 설정된 품질 목표(정확도 등)를 달성하고 있는지 여부.</td></tr>
        </Table>
      </SectionCard>
    </div>
  );
};

export default ClosingStageChecklist;
