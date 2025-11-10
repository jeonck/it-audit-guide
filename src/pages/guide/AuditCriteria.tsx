import React from 'react';

const AuditCriteria: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">감리관점/점검기준</h1>

      <p className="mb-4">
        정보시스템 감리프레임워크에서 정의하는 감리관점/점검기준은 사업 활동의 적정성을 판단하는 잣대이며, 이는 구체적인 <strong>절차(Procedure), 산출물(Deliverable), 성과(Performance)</strong>라는 세 가지 주요 범주에 적용되어 구체화됩니다.
      </p>
      <p className="mb-4">
        감리관점/점검기준이 이 세 가지 영역(절차/산출물/성과)에 적용되는 목적은 정보화 사업이 초기에 목표한 성과(기대효과)를 만족할 수 있도록 위험 요인 및 문제점을 개선하는 데 있습니다.
      </p>
      <p className="mb-6">
        다음은 각 범주에 해당하는 감리관점/점검기준과 그에 따른 구체적인 점검 항목(검토항목) 예시입니다.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">1. 절차 (Procedure) 관련 감리관점/점검기준</h2>
      <p className="mb-4">
        &apos;절차&apos; 관련 기준은 계획, 수행 활동, 관리 체계의 적정성 및 표준 준수 여부에 중점을 둡니다.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">주요 감리관점/점검기준</th>
              <th className="py-2 px-4 border-b text-left">절차 관련 검토 항목 (예시)</th>
              <th className="py-2 px-4 border-b text-left">사업 유형 및 시점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">준수성 (Adherence to standards/procedures)</td>
              <td className="py-2 px-4 border-b">방법론 및 관련 표준 준수 여부: 사업에서 정의된 절차 및 방법론/개발표준을 준수하여 산출물을 작성하였는지 검토. (예: 구현 단계에서 명명규칙, 주석, 메시지 표준 등을 준수했는지 확인).</td>
              <td className="py-2 px-4 border-b">시스템 개발 사업 / 품질보증활동</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">계획 적정성 (Planning Appropriateness)</td>
              <td className="py-2 px-4 border-b">일정계획의 실행 및 관리 가능성: 필요한 활동의 누락 여부 및 투입된 정보자원에 대비하여 활동별 시작/완료 일정이 실행 가능한 수준으로 수립되었는지 검토.</td>
              <td className="py-2 px-4 border-b">사업 관리 / 착수·계획</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">절차 적정성 (Procedure Appropriateness)</td>
              <td className="py-2 px-4 border-b">장애관리 지침 수립 및 수행: 장애관리 프로세스, 장애 이력 관리 등이 수립되어 절차에 따라 수행되는지 검토. (예: 유사 장애 반복 방지).</td>
              <td className="py-2 px-4 border-b">시스템 운영 사업 / 서비스 지원</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">실현성 (Realizability)</td>
              <td className="py-2 px-4 border-b">시험 총괄 계획: 사업 초기에 해당 사업에서 적용할 시험의 종류, 목적, 시기, 방법, 확인기준 등을 명확히 정의하였는지 확인.</td>
              <td className="py-2 px-4 border-b">시스템 개발 사업 / 분석 / 품질보증활동</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4">2. 산출물 (Deliverable) 관련 감리관점/점검기준</h2>
      <p className="mb-4">
        <strong>&apos;산출물&apos;</strong>은 정보화 사업을 통해 생성된 결과물(문서, 응용 프로그램, 데이터 등) 자체의 품질, 구조적 완성도, 일관성, 무결성 등에 초점을 맞춥니다.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">주요 감리관점/점검기준</th>
              <th className="py-2 px-4 border-b text-left">산출물 관련 검토 항목 (예시)</th>
              <th className="py-2 px-4 border-b text-left">사업 유형 및 시점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">일관성 (Consistency)</td>
              <td className="py-2 px-4 border-b">산출물 간의 추적성/일관성 확보: 현행 아키텍처(업무, 응용, 데이터, 기술, 보안) 영역 간에 상호 연관성과 정합성이 확보되었는지 검토. (예: 분석/설계 산출물이 사용자 요구사항으로부터 추적 가능한지 확인).</td>
              <td className="py-2 px-4 border-b">ITA 구축 사업 / 현행 아키텍처 구축 또는 시스템 개발 사업 / 설계</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">무결성 (Integrity)</td>
              <td className="py-2 px-4 border-b">데이터 무결성 확보 방안: 테이블 설계 시 데이터 무결성을 보장하도록 설계되었는지. (예: 데이터의 생성규칙 및 각종 키의 정의 등).</td>
              <td className="py-2 px-4 border-b">시스템 개발 사업 / 설계 / 데이터베이스</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">기능성 (Functionality)</td>
              <td className="py-2 px-4 border-b">기능 구현의 정확성/완전성: 설계된 업무 흐름에 따라 각 기능이 정확하게 구현되었는지 검토.</td>
              <td className="py-2 px-4 border-b">시스템 개발 사업 / 구현 / 응용시스템</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">보안성 (Security)</td>
              <td className="py-2 px-4 border-b">접근권한 및 통제 구현: 데이터 접근권한 및 통제가 설계에 맞게 구현되었는지, 보안정책 대비 암호화 기술이 적용되었는지 검토.</td>
              <td className="py-2 px-4 border-b">시스템 개발 사업 / 구현 / 데이터베이스</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4">3. 성과 (Performance) 관련 감리관점/점검기준</h2>
      <p className="mb-4">
        &apos;성과&apos; 관련 기준은 사업의 최종 목표 달성 여부, 시스템의 실질적인 가치와 효과, 그리고 위험 관리 측면을 다룹니다.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">주요 감리관점/점검기준</th>
              <th className="py-2 px-4 border-b text-left">성과 관련 검토 항목 (예시)</th>
              <th className="py-2 px-4 border-b text-left">사업 유형 및 시점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">충족성 (Fulfillment/Completeness)</td>
              <td className="py-2 px-4 border-b">사용자 요구사항 충족: 시스템 성능, 가용성, 확장성, 보안 및 안정성 등에 대한 사용자 요구사항이 충분히 도출 및 명세화되었는지 검토. (요구사항 누락 시 프로젝트 실패 가능성 증가).</td>
              <td className="py-2 px-4 border-b">시스템 개발 사업 / 분석 / 시스템 아키텍처</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">실현성 (Realizability)</td>
              <td className="py-2 px-4 border-b">정보화 실행계획의 실현 가능성: 로드맵, 프로젝트 목록, 프로젝트별 우선순위, 비용/효과, 연차별 예산투자 및 집행계획 등이 구체적이고 실행 가능한 수준으로 수립되었는지 검토.</td>
              <td className="py-2 px-4 border-b">ISP 수립 사업 / 개선모델 및 실행계획수립 / 정보화계획</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">효율성 (Efficiency)</td>
              <td className="py-2 px-4 border-b">자원 효율성/중복 방지: 컴포넌트 구현/도입 여부와 공통 컴포넌트 식별을 위한 공통성 및 가변성 분석이 충분히 이루어졌는지 검토. (중복 개발 방지 목적).</td>
              <td className="py-2 px-4 border-b">시스템 개발 사업 / 분석설계 / 응용시스템</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">안정성 (Stability)</td>
              <td className="py-2 px-4 border-b">시스템 최적화 및 안정화: 통합시험 및 시스템시험 결과를 반영하여 시스템 성능 최적화(튜닝)가 이루어졌는지 검토.</td>
              <td className="py-2 px-4 border-b">시스템 개발 사업 / 시험 / 시험활동</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">편의성 (Convenience)</td>
              <td className="py-2 px-4 border-b">사용자 인터페이스 구현: 사용자 인터페이스가 일관성을 갖고 업무 처리 흐름에 따라 편리하게 활용할 수 있도록 구현되었는지 검토.</td>
              <td className="py-2 px-4 border-b">시스템 개발 사업 / 구현 / 응용시스템</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        이러한 감리관점/점검기준은 감리원이 경험이나 노하우에 따라 동일한 점검 항목을 다르게 해석하는 일관성 부족을 해소하고, 정보화 사업의 계획 및 구축 활동이 목표한 성과를 만족할 수 있도록 객관적인 기준을 제시합니다.
      </p>
    </div>
  );
};

export default AuditCriteria;
