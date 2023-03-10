# π λκΈ CRUD with Redux

## π [λ°°ν¬ μ¬μ΄νΈ](https://pre-onboarding-8th-4week-6.netlify.app/)

</br>

## Team

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/TaeTaehoon"><img src="https://user-images.githubusercontent.com/107424974/212338752-939b2522-7b0a-4e7c-9ef4-85d957ec8f7c.jpeg" width="100px;" alt=""/><br /><sub><b>κ°νν</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Tenykim1109"><img src="https://user-images.githubusercontent.com/107424974/212338696-72b9433d-2ed5-4954-b9ce-ef444aa662eb.jpeg" width="100px;" alt=""/><br /><sub><b>κΉλ―Όμ </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Paperkeem"><img src="https://user-images.githubusercontent.com/107424974/212338824-fc8fd767-7ed3-4600-9596-7665f823be03.jpeg" width="100px;" alt=""/><br /><sub><b>κΉμ’μ΄</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sanghyun-lee2"><img src="https://user-images.githubusercontent.com/107424974/212338676-3e3b273b-5860-4eed-b971-1a26a9572e74.png" width="100px;" alt=""/><br /><sub><b>μ΄μν</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/LEE-YO-HAN"><img src="https://user-images.githubusercontent.com/107424974/212338768-2d0c7044-dc9e-4379-b9a9-bd7252e13287.png" width="100px;" alt=""/><br /><sub><b>μ΄μν</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/rlorxl"><img src="https://user-images.githubusercontent.com/107424974/212338810-22a9d6cf-8073-45f5-a45a-a1025011d445.jpeg" width="100px;" alt=""/><br /><sub><b>μ΄μ‘°μ</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

#### π μΌμ  : 2023.01.16 - 01.19

</br>

## λͺ©μ°¨

1. [νλ‘μ νΈ μ€ν λ°©λ²](#νλ‘μ νΈ-μ€ν-λ°©λ²)
2. [κ΅¬νμ¬ν­](#κ΅¬νμ¬ν­)

</br>

## νλ‘μ νΈ μ€ν λ°©λ²

<br>

```bash
# npm μ€μΉ
npm install
```

```bash
# Local Server μ€ν
npx json-server ./data.json --port 4000
```

```bash
REACT_APP_URL="http://localhost:4000"
```

```bash
# λ‘μ»¬ μ€ν
npm start
```

<br>

## κΈ°μ μ€ν

> React, TypeScript, Redux, axios, json-server, styled-components

<br>

## κ΅¬νμ¬ν­

#### 1. reduxλ₯Ό μ¬μ©ν΄μ λΉλκΈ° μ²λ¦¬ - λκΈ CRUD

https://github.com/wanted-onboarding8-6/pre-onboarding-8th-4week-6/blob/ace0e8dc435c18c60dfe93b10895d564ef545cdc/src/redux/commentSlice.ts#L59-L88
https://github.com/wanted-onboarding8-6/pre-onboarding-8th-4week-6/blob/f7b27511f02a502f82f39d79d58a417ba7bc3314/src/redux/store.ts#L7-L13

 - λΉλκΈ° μ²λ¦¬ λκΈ CRUDλ Redux createAsyncThunkλ₯Ό μ¬μ©ν΄ κ΅¬ννμ΅λλ€.
 - Redux logger, Redux-Devtools μ€μ νμμ΅λλ€.

</br>

#### 2. νμ΄μ§λ€μ΄μ

https://github.com/wanted-onboarding8-6/pre-onboarding-8th-4week-6/blob/f7b27511f02a502f82f39d79d58a417ba7bc3314/src/hooks/usePagenation.tsx#L19-L25
https://github.com/wanted-onboarding8-6/pre-onboarding-8th-4week-6/blob/f7b27511f02a502f82f39d79d58a417ba7bc3314/src/components/PageList.tsx#L8-L21

 - νμ΄μ§λ€μ΄μμ useEffect λ΄ async awaitλ₯Ό μ¬μ©νμ¬ μ²λ¦¬νμ΅λλ€.
 - μ΄ λκΈμλ₯Ό λΉλκΈ°λ‘ λ°μμ μλ΅κ°μ μ΄μ©ν΄ κ³μ°, ν νμ΄μ§λΉ 4κ°μ© κ²μκΈμ νΈμΆνμ΅λλ€.

</br>

#### 3. λκΈ μμ±, μμ , μ­μ  ν λμ

https://github.com/wanted-onboarding8-6/pre-onboarding-8th-4week-6/blob/f7b27511f02a502f82f39d79d58a417ba7bc3314/src/components/Form.tsx#L15-L26
https://github.com/wanted-onboarding8-6/pre-onboarding-8th-4week-6/blob/f7b27511f02a502f82f39d79d58a417ba7bc3314/src/hooks/usePagenation.tsx#L13-L17

   - λκΈ μμ±νκ³  λ λ€: λ€λ₯Έ νμ΄μ§μ μμΉνκ³  μμλλΌλ 1νμ΄μ§λ‘ μ΄λ, μλ ₯ νΌ μ΄κΈ°ν
   - λκΈ μμ νκ³  λ λ€: νμ¬ λ³΄κ³ μλ νμ΄μ§ μ μ§, μλ ₯ νΌ μ΄κΈ°ν
   - μ­μ νκ³  λ λ€: 1νμ΄μ§λ‘ μ΄λ

</br>

## μκ΅¬μ¬ν­

- Redux νκ²½μ€μ μ μμ λ‘­κ² μ§ν
   - Redux-saga or Redux-thunk μμ λ‘­κ² μ ν κ°λ₯
   - λ―Έλ€μ¨μ΄ μ¬μ©μνλ κ²λ κ°λ₯
- Redux logger, Redux-Devtools μ€μ  νμ
- Reduxλ₯Ό μ΄μ©ν λΉλκΈ° μ²λ¦¬ νμ
