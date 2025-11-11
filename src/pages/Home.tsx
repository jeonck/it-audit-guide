import TabNavigation, { TabItem } from '../components/TabNavigation';
import AuditProcess from './guide/AuditProcess';
import LegalBasis from './guide/LegalBasis';
import ProjectTypeDifferences from './guide/ProjectTypeDifferences';
import PhasedAudit from './guide/PhasedAudit';
import DesignCheckpoints from './guide/DesignCheckpoints';
import InspectionCoreComponents from './guide/InspectionCoreComponents';
import AuditCriteria from './guide/AuditCriteria';
import ClosingStageChecklist from './guide/ClosingStageChecklist'; // Import the new component

export default function Home() {
  const tabs: TabItem[] = [
    {
      id: 'legal',
      label: '법적 근거',
      icon: '⚖️',
      accentColor: 'purple',
      content: <LegalBasis />,
    },
    {
      id: 'types',
      label: '사업 유형별 차이',
      icon: '⚙️',
      accentColor: 'green',
      content: <ProjectTypeDifferences />,
    },
    {
      id: 'phased',
      label: '단계별 감리',
      icon: '📊',
      accentColor: 'orange',
      content: <PhasedAudit />,
    },
    {
      id: 'core-components',
      label: '핵심 구성 요소',
      icon: '🧩',
      accentColor: 'blue',
      content: <InspectionCoreComponents />,
    },
    {
      id: 'audit-criteria',
      label: '감리관점/점검기준',
      icon: '🔍',
      accentColor: 'purple',
      content: <AuditCriteria />,
    },
    {
      id: 'closing-checklist', // New tab ID
      label: '종료단계 점검항목', // New tab label
      icon: '🏁', // New tab icon
      accentColor: 'green', // New tab accent color
      content: <ClosingStageChecklist />, // New tab content
    },
    {
      id: 'design',
      label: '설계 점검항목',
      icon: '✏️',
      accentColor: 'red',
      content: <DesignCheckpoints />,
    },
    {
      id: 'process',
      label: '감리 수행 절차',
      icon: '🔄',
      accentColor: 'blue',
      content: <AuditProcess />,
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          정보시스템 감리 수행 가이드
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          정보시스템 감리법인을 위한 감리 수행 절차와 표준 점검 항목에 대한 상세 지침서입니다.
        </p>
      </div>

      <TabNavigation tabs={tabs} defaultTab="legal" />
    </div>
  );
}
