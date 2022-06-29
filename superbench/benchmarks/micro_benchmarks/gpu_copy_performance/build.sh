nvcc -ccbin g++ -I../../../Common  -m64 \
     --threads 0 --std=c++11 \
     -gencode arch=compute_60,code=sm_60 \
     -gencode arch=compute_70,code=sm_70 \
     -gencode arch=compute_75,code=sm_75 \
     -gencode arch=compute_80,code=sm_80 \
     -gencode arch=compute_86,code=sm_86 \
     -gencode arch=compute_86,code=compute_86 \
     -lnuma \
     -o gpu_copy \
     gpu_copy.cu

#10GB: 10737418240
if [ -e gpu_copy ]; then
     ./gpu_copy --h ; echo "\n"
     ./gpu_copy --size 1073741824 \
	--num_warm_up 1 \
	--num_loops 3 \
	--sm_copy \
	--dtoh \
	--check_data
else
	echo "gpu_copy doesn't exist"
fi
	#--sm_copy \
	#--dma_copy \
	#--check_data

#cpu_to_gpu0_by_sm_under_numa0 12.2782
#cpu_to_gpu1_by_sm_under_numa0 12.2978

