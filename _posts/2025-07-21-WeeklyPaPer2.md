---
title: "위클리 페이퍼 2"
excerpt: "지도학습과 비지도학습, 손실 함수, 편향-분산 트레이드오프, K-폴드 교차 검증에 대한 심화 학습"

tags:
  - python
  - AI engineering
  - machine learning
  - supervised learning
  - unsupervised learning
  - loss function
  - cross validation

toc: true
toc_sticky: true

date: 2025-07-21
last_modified_at: 2025-07-21
categories: 
  - sprint
---

## 지도학습과 비지도학습의 차이

머신러닝에서 프로그램은 '학습(Learning)'을 하게 됩니다. 이때, 학습을 하는 방법에 따라 크게 **지도학습**과 **비지도학습**으로 나뉠 수 있습니다.

### 지도학습 (Supervised Learning)

**정답이 있는 데이터(레이블링된 데이터)** 를 사용하여 모델을 훈련시키는 학습 방법

**주요 특징:**
- 입력 데이터와 정답(레이블)이 쌍으로 제공
- 모델이 입력과 출력 간의 관계를 학습
- 예측 성능을 정확히 측정 가능

**예시:**
- **분류**: 스팸 메일 분류, 이미지 분류, 질병 진단
- **회귀**: 집값 예측, 온도 예측, 매출 예측

### 비지도학습 (Unsupervised Learning)

**정답 없이 데이터 자체의 패턴이나 구조**를 발견하도록 학습시키는 방법

**주요 특징:**
- 레이블이 없는 데이터만 사용
- 데이터의 숨겨진 패턴을 발견
- 결과 해석이 주관적일 수 있음

**예시:**
- **클러스터링**: 고객 분류, 문서 그룹화
- **차원 축소**: 데이터 시각화, 특성 추출
- **연관 규칙 학습**: 장바구니 분석, 추천 시스템

### 비교표

| 구분 | 지도학습 | 비지도학습 |
|------|----------|------------|
| **데이터** | 레이블링된 데이터 | 레이블 없는 데이터 |
| **목표** | 정답 예측 | 패턴 발견 |
| **평가** | 정확도, 정밀도 등 | 주관적 해석 |
| **응용** | 분류, 회귀 | 클러스터링, 차원 축소 |

---

## 손실 함수 (Loss Function)

### 손실 함수란?

**머신러닝이나 딥러닝 모델이 예측한 값과 실제 값 사이의 차이를 측정하는 함수**

### 손실 함수의 역할

1. **성능 평가**: 모델의 예측 성능을 수치적으로 측정
2. **개선 방향 제시**: 어떤 방향으로 개선되어야 할지 알려줌
3. **학습 가이드라인**: 모델 학습의 목표 제공

### 중요성

- **모델 학습의 핵심**: 손실 함수 없이는 모델이 자신의 성능을 개선해 나가는 것이 불가능
- **최적화 기준**: 손실 함수의 값을 최소화하는 것이 모델 학습의 목표
- **방향성 제공**: 최적화 과정에서 모델이 올바른 방향으로 나아갈 수 있도록 도움

### 주요 손실 함수

#### 회귀 문제
- **MSE (Mean Squared Error)**: 평균 제곱 오차
- **MAE (Mean Absolute Error)**: 평균 절대 오차

#### 분류 문제
- **Cross Entropy**: 교차 엔트로피
- **Binary Cross Entropy**: 이진 교차 엔트로피

---

## 편향과 분산 (Bias and Variance)

### 편향 (Bias)

**추정 결과가 한 쪽으로 치우치는 경향을 보임으로써 발생하는 오차**

- 모델에서 예측한 결과가 정답과 일정하게 차이가 나는 정도
- **높은 편향**: 모델이 단순하여 복잡한 패턴을 학습하지 못함 (과소적합)
- **낮은 편향**: 모델이 복잡한 패턴을 학습할 수 있음

### 분산 (Variance)

**변량(데이터)들이 퍼져있는 정도**

- 모델에서는 주어진 데이터 포인트에 대한 모델 예측의 가변성
- **높은 분산**: 모델이 훈련 데이터에 과도하게 맞춰짐 (과적합)
- **낮은 분산**: 모델이 일관된 예측을 수행

### 편향-분산 트레이드오프 (Bias-Variance Trade-off)

**편향과 분산은 상충관계**를 갖습니다:

- 서로 상반되는 특성을 가지고 있어, 한쪽을 줄이려고 하면 다른 쪽이 증가하는 경향
- 모델을 학습할 때는 **편향과 분산의 균형**을 잘 맞춰야 함

### 모델 특성별 분석

| 편향 | 분산 | 모델 특성 | 문제점 |
|------|------|-----------|--------|
| **높음** | 낮음 | 단순한 모델 | 예측력이 낮음 (과소적합) |
| 낮음 | **높음** | 복잡한 모델 | 과대적합 위험 |
| **낮음** | **낮음** | 이상적인 모델 | 학습 데이터와 새로운 데이터 모두에서 좋은 성능 |

---

## K-폴드 교차 검증 (K-Fold Cross Validation)

### K-폴드 교차 검증이란?

**편향된 모델을 해결하기 위해 교차검증의 방법을 이용하여 다양한 학습과 평가를 수행하는 가장 보편적으로 사용되는 교차 검증 기법**

### 목적
- 제한된 데이터 샘플에서 머신러닝 모델을 평가
- 데이터의 특정한 분할에 의한 편향을 줄임
- 모델의 일반화 성능을 더 정확하게 평가

### 방법

1. **데이터 분할**: 주어진 데이터를 K개의 폴드로 나눔
2. **반복 학습**: 각 폴드를 한 번씩 검증 세트로 사용하고 나머지를 학습 세트로 활용
3. **성능 평가**: K번의 학습 결과를 평균하여 최종 성능 평가

### K 값 선택 시 고려사항

#### 1. 계산 시간
- **K가 클수록**: 계산 시간이 오래 걸림 (예: K=10)
- **K가 작을수록**: 시간이 덜 걸림 (예: K=3)

#### 2. 정확도와 안정성
- **K가 클수록**: 
  - 결과가 더 정확함
  - 결과들이 들쭉날쭉 불안정할 수 있음
- **K가 작을수록**: 
  - 결과가 덜 정확할 수 있음
  - 비교적 안정적

#### 3. 데이터 양
- **데이터가 적으면**: K를 크게 해서 데이터를 최대한 활용
- **데이터가 많으면**: K를 작게 해도 충분
- **일반적 권장**: K=5 또는 K=10

### K-폴드 교차 검증의 장점

- **편향 감소**: 다양한 데이터 분할로 인한 편향 최소화
- **신뢰성 향상**: 더 안정적인 모델 성능 평가
- **데이터 효율성**: 제한된 데이터를 최대한 활용

---


---




