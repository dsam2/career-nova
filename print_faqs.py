with open('career-nova-export/scripts/vendor/JlQPYH9lf.Dzlq9O7H.mjs', 'r', encoding='utf-8') as f:
    text = f.read()

import re
questions = re.findall(r'm09IVM0:\s*`([^`]+)`', text)
answers = re.findall(r'NV3c2dGIv:\s*`([^`]+)`', text)

print(f"Found {len(questions)} questions and {len(answers)} answers:")
for i, (q, a) in enumerate(zip(questions, answers)):
    print(f"Q{i+1}: {q}")
    print(f"A{i+1}: {a}\n")
