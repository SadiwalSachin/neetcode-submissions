class KthLargest {
public:
    int K ; // using minHeap to track the kth largest element
    priority_queue<int,vector<int>,greater<int>> minHeap;

    KthLargest(int k, vector<int>& nums) {
        K = k;
        for(int x:nums){
            minHeap.push(x);
        }
    }
    
    int add(int val) {
        minHeap.push(val); // push val first because we use it for comparision

        while(minHeap.size() > K){ // top element of minheap represent kth largest element
            minHeap.pop();           // so , we need to reduce size of heap to k , pop
        }

        return minHeap.top();
    }
};