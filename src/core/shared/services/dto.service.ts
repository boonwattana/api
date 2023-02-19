import { Transform } from 'class-transformer';

export function ToBoolean(): (target: any, key: string) => void {
  return Transform((obj: any) => {
    if (obj.obj[obj.key] === 'true' || obj.obj[obj.key] === true || obj.obj[obj.key] === '1' || obj.obj[obj.key] === 1) {
      return true;
    } else {
      return false;
    }
  });
}
