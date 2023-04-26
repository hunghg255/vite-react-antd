import { useAtomsDevtools } from 'jotai-devtools';

// Debug state jotai by React develop devtools
// https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
export const DebugAtoms = () => {
  useAtomsDevtools('root');

  return <></>;
};
