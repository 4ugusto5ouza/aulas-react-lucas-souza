interface ILoginInputProps {
  type: string;
  label: string;
  required: boolean;
  value: string;

  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}

const LoginInput: React.FC<ILoginInputProps> = (props) => {
  return (
    <>
      <label>
        <span>{props.label}</span>
        <input
          type={props.type}
          required={props.required}
          value={props.value}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? props.onPressEnter && props.onPressEnter()
              : undefined
          }
          onChange={(e) => props.onChange(e.target.value)}
        />
      </label>
    </>
  );
};

export { LoginInput };
