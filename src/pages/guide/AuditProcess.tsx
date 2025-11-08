import ExpandableCard from "../../components/ExpandableCard";

const AuditProcess = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">정보시스템 감리 수행 절차</h2>
        <p className="text-lg text-gray-600">
          정보시스템 감리는 크게 <strong>예비조사, 현장감리, 시정조치확인</strong>의 세 가지 주요 절차로 구성됩니다. 
          이 절차는 「전자정부법 시행령」 및 「정보시스템 감리기준」에 기반하며 모든 유형의 정보화 사업에 적용될 수 있습니다.
        </p>
      </div>

      <div className="space-y-6">
        <ExpandableCard 
          title="1. 예비조사 (A00)"
          subtitle="감리 준비 단계: 감리계획서를 수립합니다."
          defaultOpen={true}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">주요 활동</h4>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                <li><strong>A10. 예비조사 준비:</strong> 총괄감리원이 발주자/사업자와 소통하여 예비조사 일정 및 감리원을 확정하고, 검토 자료 준비를 요청합니다.</li>
                <li><strong>A20. 예비조사 실시:</strong> 이해관계자를 식별하고 사업 현황 자료를 검토하여 감리계획서 작성에 필요한 사항(감리 범위, 영역, 일정 등)을 확인합니다.</li>
                <li><strong>A30. 감리계획서 작성 및 제출:</strong> 예비조사 결과를 반영하여 감리계획서(안)을 작성하고, 발주자/사업자와 협의를 거쳐 현장감리 착수 전 제출합니다.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">핵심 산출물</h4>
              <p className="mt-2 text-gray-600"><strong>O01. 감리계획서:</strong> 감리 일정, 인력, 범위, 점검항목 등을 명시한 현장감리 수행의 기준 문서입니다.</p>
            </div>
          </div>
        </ExpandableCard>

        <ExpandableCard 
          title="2. 현장감리 (B00)"
          subtitle="문제점 확인 및 개선방향 도출: 감리수행결과보고서를 작성합니다."
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">주요 활동</h4>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                <li><strong>B10. 감리 준비:</strong> 현장감리 환경 및 착수회의 일정을 확인합니다.</li>
                <li><strong>B20. 착수회의:</strong> 이해관계자가 모두 참석하여 감리 수행 내용에 대한 공감대를 형성합니다.</li>
                <li><strong>B30. 감리 수행 (핵심):</strong> 감리계획서를 기준으로 산출물 검토, 분석, 시험을 통해 문제점을 발견하고 개선방향을 도출합니다.</li>
                <li><strong>B40. 보고서(안) 작성 및 검토:</strong> 감리 결과를 취합하여 보고서 초안을 작성하고 내부 및 외부 검토를 거칩니다.</li>
                <li><strong>B50. 종료회의:</strong> 감리수행결과보고서(안)으로 이견 사항을 청취합니다.</li>
                <li><strong>B60. 보고서 확정 및 통보:</strong> 최종 이견을 반영하여 보고서를 확정하고 발주자/사업자에게 통보합니다.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">핵심 산출물</h4>
              <p className="mt-2 text-gray-600"><strong>O02/O04. 감리수행결과보고서:</strong> 감리 점검 결과, 문제점, 개선권고사항을 명시한 문서입니다.</p>
            </div>
          </div>
        </ExpandableCard>

        <ExpandableCard 
          title="3. 시정조치 확인 (C00)"
          subtitle="개선사항 조치 결과 확인: 시정조치확인보고서를 작성합니다."
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">주요 활동</h4>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                <li><strong>C10. 시정조치확인 준비:</strong> 사업자로부터 시정조치결과서 확인 요청을 접수하고 확인계획을 수립합니다.</li>
                <li><strong>C20. 시정조치 확인:</strong> 현장에서 시정조치 결과를 확인하고 객관적인 근거를 확보합니다.</li>
                <li><strong>C30. 시정조치확인보고서 작성 및 협의:</strong> 확인 결과를 보고서(안)으로 작성하여 발주자/사업자와 이견을 조정합니다.</li>
                <li><strong>C40. 확인보고서 확정 및 제출:</strong> 최종 보고서를 확정하여 발주자/사업자에게 제출합니다.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">핵심 산출물</h4>
              <p className="mt-2 text-gray-600"><strong>O03/O05. 시정조치확인보고서:</strong> 개선사항에 대한 조치 결과를 최종 확인한 문서입니다.</p>
            </div>
          </div>
        </ExpandableCard>
      </div>
    </div>
  );
};

export default AuditProcess;
