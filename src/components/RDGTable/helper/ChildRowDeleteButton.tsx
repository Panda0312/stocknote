import { useFocusRef } from '../hooks/useFocusRef';

interface ChildRowDeleteButtonProps {
  isCellSelected: boolean;
  isDeleteSubRowEnabled: boolean;
  onDeleteSubRow: () => void;
}

export function ChildRowDeleteButton ({
  isCellSelected,
  onDeleteSubRow,
  isDeleteSubRowEnabled
}: ChildRowDeleteButtonProps) {
  const { ref, tabIndex } = useFocusRef<HTMLSpanElement>(isCellSelected);

  function handleKeyDown (e: React.KeyboardEvent<HTMLSpanElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      onDeleteSubRow();
    }
  }

  return (
    <>
      <div />
      {isDeleteSubRowEnabled && (
        <div onClick={onDeleteSubRow}>
          <span ref={ref} tabIndex={tabIndex} onKeyDown={handleKeyDown}>
            ❌
          </span>
        </div>
      )}
    </>
  );
}