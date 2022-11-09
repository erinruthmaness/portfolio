import { ReactChildren } from "./types.model";

export interface ModalProps {
  title: string | ReactChildren;
  content: ReactChildren;
}
