/** Этот файл — обёртка для группы радиокнопок (RadioGroup).
 * Он собирает отдельные опции в логическую группу с заголовком и управляет их выбором.*/



import { Text } from 'src/ui/text';
import { Option } from './Option';
import type { OptionType } from 'src/constants/articleProps';
import styles from './RadioGroup.module.scss';

type RadioGroupProps = {
  name: string;
  options: OptionType[];
  selected: OptionType;
  onChange?: (value: OptionType) => void;
  title: string;
  showText?: boolean; // <--- добавили
};

export const RadioGroup = (props: RadioGroupProps): React.JSX.Element => {
  const { name, options, selected, onChange, title, showText = false } = props;

  const handleChange = (option: OptionType): void => onChange?.(option);

  return (
    <div className={styles.container}>
      {title && (
        <Text weight={800} size={12} uppercase>
          {title}
        </Text>
      )}
      <div className={styles.group}>
        {options.map((option) => (
/**вот как раз пропс Option*/ <Option
            key={option.value}
            groupName={name}
            value={option.value}
            title={option.title}
            selected={selected}
            onChange={() => handleChange(option)}
            option={option}
            showText={showText}
          />
        ))}
      </div>
    </div>
  );
};
