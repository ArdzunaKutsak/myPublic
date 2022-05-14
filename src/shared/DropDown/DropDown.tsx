import React from 'react';
import styles from './dropdown.css';
interface IDropDownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean,
  onOpen?: () => void,
  onClose?: () => void,
}

const NOOP = () => {};

export function DropDown({button, children,isOpen, onClose = NOOP, onOpen = NOOP}: IDropDownProps) {
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(isOpen)

  React.useEffect(() => setIsDropDownOpen(isOpen), [isOpen])
  React.useEffect(() => isDropDownOpen ? onOpen() : onClose(), [isDropDownOpen])

  const handleOpen = () => {
      setIsDropDownOpen(!isDropDownOpen)
  }
  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropDownOpen && ( 
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropDownOpen(false)}>
            
            {children}

          </div>
        </div>
      )}
    </div>
  );
}
