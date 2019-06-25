function alphabetSort(message){
	message.toLowerCase();
	message = QuickSort(message,0,message.length-1);
	document.write(message);
}

function QuickSort(R,low,high)
{
    var i,j,temp;
    i=low;
    j=high;
    if(low<high)
    {
        temp=R[low];    //设置枢轴
        while(i!=j)
        {
            while(j>i&&R[j]>=temp)
            {
                --j;
            }
            if(i<j)
            {
                R[i]=R[j];
                ++i;
            }

            while(i<j&&R[j]<temp)
            {
                ++i;
            }
            if(i<j)
            {
                R[j]=R[i];
                --j;
            }
        }
        R[i]=temp;
        QuickSort(R,low,i-1);
        QuickSort(R,i+1,high);
    }
	return R;
}
alphabetSort('hello'); // should return 'ehllo'